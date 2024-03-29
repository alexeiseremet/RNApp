/**
 * @format
 */

import * as React from 'react';
import {Text} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import stylesFn from './Typography.styles';

export default React.memo(function Typography(props: any): React.JSX.Element {
  const {children, style, unit, ...rest} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);

  React.useEffect(() => {
    console.log('=AAA= Typography.tsx []');
  }, []);

  console.log(`=AAA= Typography.tsx ${Math.random()}`);

  return (
    <Text style={[styles[unit], style]} {...rest}>
      {children}
    </Text>
  );
});
