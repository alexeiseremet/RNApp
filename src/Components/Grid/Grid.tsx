/**
 * @format
 */

import * as React from 'react';
import {View} from 'react-native';

import stylesFn from './Grid.styles';

function Grid(props): React.JSX.Element {
  const {children} = props;
  const styles = stylesFn();

  console.log(`=AAA= Grid.tsx ${Math.random()}`);

  return <View style={styles.Grid}>{children}</View>;
}

export default React.memo(Grid);
