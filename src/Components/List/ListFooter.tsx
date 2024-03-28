/**
 * @format
 */

import * as React from 'react';

import {View, ActivityIndicator} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import Typography from '../Typography/Typography';
import stylesFn from './List.styles';

function ListFooter(props: {
  count: number;
  loading: boolean;
}): React.JSX.Element {
  const {count = 0, loading} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  console.log(`=AAA= ListFooter.tsx ${Math.random()}`);

  return (
    <View style={styles.ListFooter}>
      <Typography unit="Info">{`${count} characters`}</Typography>
      {loading && <ActivityIndicator />}
    </View>
  );
}

export default React.memo(ListFooter);
