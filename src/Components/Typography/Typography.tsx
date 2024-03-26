/**
 * @format
 */

import * as React from 'react';
import {Text} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

// import type {TypographyUnit} from './Typography.types';
import stylesFn from './Typography.styles';

function Typography(props): React.JSX.Element {
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
}

export default React.memo(Typography);
