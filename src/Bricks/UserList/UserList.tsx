/**
 * @format
 */

import * as React from 'react';
import {View, FlatList, ActivityIndicator, Pressable} from 'react-native';
import {useTheme as useRNTheme, useNavigation} from '@react-navigation/native';

import useFetchData from '../../hooks/useFetchData';
import Typography from '../Typography/Typography';
import UserListItem from './UserListItem';
import stylesFn from './UserList.styles';

function UserList(): React.JSX.Element {
  const navigation = useNavigation();
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  const {loading, response} = useFetchData();

  console.log(`=AAA= UserList.tsx ${Math.random()}`);

  React.useEffect(() => {
    console.log('=AAA= UserList.tsx []');
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.UserList}>
      <FlatList
        data={response}
        initialNumToRender={15}
        renderItem={({item, ...rest}) => <UserListItem data={item} {...rest} />}
        keyExtractor={user => user.id}
        ListHeaderComponent={
          <Pressable onPress={() => navigation.navigate('Modal')}>
            <Typography>Pressable ListHeaderComponent, UserList.tsx</Typography>
          </Pressable>
        }
      />
    </View>
  );
}

export default React.memo(UserList);
