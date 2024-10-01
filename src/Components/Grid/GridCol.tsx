/**
 * @format
 */

import * as React from 'react';
import { View } from 'react-native';

import stylesFn from './Grid.styles';

export default React.memo(function GridCol(props: any): React.JSX.Element {
  const { children, col } = props;
  const styles = stylesFn();

  return <View style={styles[`GridCol${col}`]}>{children}</View>;
});
