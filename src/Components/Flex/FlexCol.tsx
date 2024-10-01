/**
 * @format
 */

import * as React from 'react';
import { View } from 'react-native';

import stylesFn from './Flex.styles';

export default React.memo(function FlexCol(props: any): React.JSX.Element {
  const { children, size } = props;
  const styles = stylesFn();

  return <View style={[styles[`Flex${size}`]]}>{children}</View>;
});
