/**
 * @format
 */

import * as React from 'react';

import {View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import Typography from '../Typography/Typography';
import stylesFn from './List.styles';

function ListFooter(props): React.JSX.Element {
  const {data} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  console.log(`=AAA= ListFooter.tsx ${Math.random()}`);

  return (
    <View style={styles.ListFooter}>
      <Typography unit="Info">{`${data.count || 0} characters`}</Typography>
    </View>
  );
}

export default React.memo(ListFooter);
