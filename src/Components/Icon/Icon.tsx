/**
 * @format
 */

import * as React from 'react';
import { View } from 'react-native';
import { useTheme as useRNTheme } from '@react-navigation/native';
import Back from './IconBack';
import Grill from './IconGrill';
import Home from './IconHome';

const variants: Record<string, any> = {
  Back, Grill, Home
};

export default React.memo(function Icon(props: any): React.JSX.Element {
  const { colors } = useRNTheme();
  const { variant, width, height, color = colors.text, ...rest } = props;
  const IconSVG = variants[variant];

  return (
    <View style={{ width, height }} {...rest}>
      <IconSVG fill={color} />
    </View>
  );
});
