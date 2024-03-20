/**
 * @format
 */

import * as React from 'react';

import {View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import Typography from '../Typography/Typography';
import stylesFn from './UserList.styles';

function UserListItem(props): React.JSX.Element {
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  console.log(`=AAA= UserListItem.tsx ${Math.random()}`);

  return (
    <View style={styles.UserListItem}>
      <Typography>{JSON.stringify(props.data?.name)}</Typography>
    </View>
  );
}

export default React.memo(UserListItem);
