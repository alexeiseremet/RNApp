/**
 * @format
 */

import * as React from 'react';
import { View } from 'react-native';
import { useTheme as useRNTheme } from '@react-navigation/native';
import IconMeta from './IconMeta';

const variants = {
  Meta: IconMeta,
};

export default React.memo(function Icon(props: any): React.JSX.Element {
  const { colors } = useRNTheme();
  const { variant, width, height, color = colors.text, ...rest } = props;
  const IconSVG = variants[variant];

  return (
    <View style={{ width, height }} {...rest}>
      <IconSVG color={color} />
    </View>
  );
});
