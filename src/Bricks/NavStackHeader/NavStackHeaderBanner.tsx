/**
 * @format
 */

import * as React from 'react';
import {Alert, Animated} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import stylesFn from './NavStackHeader.styles';

function NavStackHeaderBanner(props) {
  const {current, next} = props.progress;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  const progress = Animated.add(current, next || 0);
  const opacity = progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  const onPress = React.useCallback(() => {
    Alert.alert(
      'About Credex',
      'Credex strives to make the borrowing process quick, easy, and transparent for their clients.',
    );
  }, []);

  return (
    <Animated.Text
      onPress={onPress}
      style={[styles.NavStackHeaderBanner, {opacity}]}>
      About credex
    </Animated.Text>
  );
}

export default React.memo(NavStackHeaderBanner);
