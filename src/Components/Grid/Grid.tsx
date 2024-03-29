/**
 * @format
 */

import * as React from 'react';
import {View} from 'react-native';

import stylesFn from './Grid.styles';

export default React.memo(function Grid(props: any): React.JSX.Element {
  const {children} = props;
  const styles = stylesFn();

  console.log(`=AAA= Grid.tsx ${Math.random()}`);

  return <View style={styles.Grid}>{children}</View>;
});
