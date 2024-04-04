/**
 * @format
 */

import * as React from 'react';

import {View, ActivityIndicator} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import Typography from '../Typography/Typography';
import stylesFn from './List.styles';

export default React.memo(function ListFooter(props: {
  count: number;
  loading: boolean;
}): React.JSX.Element {
  const {count = 0, loading} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);

  return (
    <View style={styles.ListFooter}>
      <Typography role="Info">{`${count} characters`}</Typography>
      {loading && <ActivityIndicator />}
    </View>
  );
});
