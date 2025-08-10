/**
 * @format
 */

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import { GestureDetector } from 'react-native-gesture-handler';
import stylesFn from './Sheet.styles';
import useHookSheet from './hookSheet';

export default React.memo(function Sheet(props: any): React.JSX.Element | null {
  const { children, params } = props;
  const styles = stylesFn();
  const {
    animatedSheetContainerStyles,
    backdropGesture,
    headerGesture,
    newPanGesture,
    isOpen,
  } = useHookSheet(params);

  if (!isOpen) {
    return null;
  }

  return (
    <View style={[styles.Sheet]}>
      {/* <GestureDetector gesture={backdropGesture}> */}
      <Animated.View
        style={[styles.SheetBackdrop]}
        // entering={FadeIn} // !!! this generate error in this release
        exiting={FadeOut}
      />
      {/* </GestureDetector> */}

      <GestureDetector gesture={newPanGesture}>
        <Animated.View
          style={[styles.SheetContainer, animatedSheetContainerStyles]}
        // entering={SlideInDown}
        // exiting={SlideOutDown}>
        >
          <View style={styles.SheetContainerInner}>
            {/* <GestureDetector gesture={headerGesture}> */}
            <View style={styles.SheetHeader}>
              <View style={styles.SheetHeaderLine} />
            </View>
            {/* </GestureDetector> */}

            <Animated.View style={styles.SheetScrollView}>
              {children}
            </Animated.View>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
});
