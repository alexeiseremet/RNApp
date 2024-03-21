/**
 * @format
 */

import * as React from 'react';

import {View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import Typography from '../Typography/Typography';
import stylesFn from './List.styles';

function ListItem(props): React.JSX.Element {
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  console.log(`=AAA= ListItem.tsx ${Math.random()}`);

  return (
    <View style={styles.ListItem}>
      <Typography>{props.data?.name}</Typography>
    </View>
  );
}

export default React.memo(ListItem);
