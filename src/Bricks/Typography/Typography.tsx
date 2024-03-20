/**
 * @format
 */

import * as React from 'react';
import {Text} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import stylesFn from './Typography.styles';

function Typography(props): React.JSX.Element {
  const {children, style, ...rest} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  console.log(`=AAA= Typography.tsx ${Math.random()}`);

  React.useEffect(() => {
    console.log('=AAA= Typography.tsx []');
  }, []);

  return (
    <Text style={[styles.Typography, style]} colors={colors} {...rest}>
      {children}
    </Text>
  );
}

export default React.memo(Typography);
