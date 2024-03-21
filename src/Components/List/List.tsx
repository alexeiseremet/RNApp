/**
 * @format
 */

import * as React from 'react';
import {View, FlatList, ActivityIndicator, Pressable} from 'react-native';
import {useTheme as useRNTheme, useNavigation} from '@react-navigation/native';

import useFetchData from '../../hooks/useFetchData';
import Typography from '../Typography/Typography';
import ListItem from './ListItem';
import stylesFn from './List.styles';

function List(): React.JSX.Element {
  const navigation = useNavigation();
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  const {loading, response} = useFetchData();

  React.useEffect(() => {
    console.log('=AAA= List.tsx []');
  }, []);

  console.log(`=AAA= sList.tsx ${Math.random()}`);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.List}>
      <FlatList
        data={response?.results}
        initialNumToRender={15}
        renderItem={({item, ...rest}) => <ListItem data={item} {...rest} />}
        keyExtractor={user => user.id}
        ListHeaderComponent={
          <Pressable onPress={() => navigation.navigate('Modal')}>
            <Typography>{`There is a total of ${response?.info.count} episodes sorted by id.`}</Typography>
          </Pressable>
        }
      />
    </View>
  );
}

export default React.memo(List);
