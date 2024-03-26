/**
 * @format
 */

import * as React from 'react';

import {View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import Link from '../Link/Link';
import stylesFn from './List.styles';

function ListItem(props): React.JSX.Element {
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  console.log(`=AAA= ListItem.tsx ${Math.random()}`);

  return (
    <View style={styles.ListItem}>
      <Link
        onPress={() => {
          console.log(`=AAA= ListItem.tsx ${props.data?.name}`);
        }}
        title={props.data?.name}
      />
    </View>
  );
}

export default React.memo(ListItem);
