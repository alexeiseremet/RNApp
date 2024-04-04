/**
 * @format
 */

import * as React from 'react';

import {View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import Typography from '../Typography/Typography';
import stylesFn from './List.styles';

function ListHeader(): React.JSX.Element {
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);

  return (
    <View style={styles.ListHeader}>
      <Typography role="Headline">Characters</Typography>
    </View>
  );
}

export default React.memo(ListHeader);
