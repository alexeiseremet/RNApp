/**
 * @format
 */

import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  runOnJS,
  runOnUI,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Gesture } from 'react-native-gesture-handler';

// TRANSLATE_Y: withTiming(windowHeight * (1 - sheetHeight) + insets.top),
// HEIGHT: withTiming(windowHeight * sheetHeight - insets.top),

export default function useHookSheet(params?: any) {
  const [isOpen, setOpen] = React.useState(true);
  const { height: windowHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const INIT_OFFSET_Y = windowHeight * (1 - params.height);
  const INIT_HEIGHT = windowHeight * params.height;
  const context = useSharedValue({
    OFFSET_Y: INIT_OFFSET_Y,
    HEIGHT: INIT_HEIGHT,
  });

  const toggleSheet = React.useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const onHandlerStart = React.useCallback((event: any) => {
    'worklet';
    const offsetDelta = event.changeY + context.value.OFFSET_Y;

    context.modify(prev => {
      return {
        ...prev,
        OFFSET_Y: offsetDelta > insets.top ? offsetDelta : insets.top,
      };
    });
  }, []);

  const onHandlerFinalize = React.useCallback((event: any) => {
    'worklet';

    if (event.translationY > context.value.HEIGHT * 0.25) {
      runOnJS(toggleSheet)();
    }

    context.modify(prev => {
      return {
        ...prev,
        OFFSET_Y: INIT_OFFSET_Y,
      };
    });
  }, []);

  const animatedSheetContainerStyles = useAnimatedStyle(() => {
    return {
      height: context.value.HEIGHT,
      transform: [{ translateY: withSpring(context.value.OFFSET_Y) }],
    };
  });

  const backdropGesture = Gesture.Tap(); //.onStart(runOnJS(toggleSheet));
  const headerGesture = Gesture.Pan();

  const newPanGesture = Gesture.Pan()
    .onChange(onHandlerStart)
    .onFinalize(onHandlerFinalize);

  return {
    animatedSheetContainerStyles,
    backdropGesture,
    headerGesture,
    newPanGesture,
    toggleSheet,
    isOpen,
  };
}
