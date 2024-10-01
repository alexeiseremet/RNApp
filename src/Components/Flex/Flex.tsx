/**
 * @format
 */

import * as React from 'react';
import { View } from 'react-native';

import stylesFn from './Flex.styles';

export default React.memo(function Flex(props: any): React.JSX.Element {
  const { children } = props;
  const styles = stylesFn();

  return <View style={styles.Flex}>{children}</View>;
});
