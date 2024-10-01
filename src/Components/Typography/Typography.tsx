/**
 * @format
 */

import * as React from 'react';
import { Text } from 'react-native';
import { useTheme as useRNTheme } from '@react-navigation/native';

import stylesFn from './Typography.styles';

export default React.memo(function Typography(props: any): React.JSX.Element {
  const { children, role, align, ...rest } = props;
  const { colors } = useRNTheme();
  const styles = stylesFn(colors);

  return (
    <Text style={[styles[role], styles[align]]} {...rest}>
      {children}
    </Text>
  );
});
