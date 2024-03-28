/**
 * @format
 */

import * as React from 'react';

import {View} from 'react-native';

import stylesFn from './Grid.styles';

function GridCol(props): React.JSX.Element {
  const {children, col} = props;
  const styles = stylesFn();
  console.log(`=AAA= GridCol.tsx ${Math.random()}`);

  return <View style={styles[`GridCol${col}`]}>{children}</View>;
}

export default React.memo(GridCol);
