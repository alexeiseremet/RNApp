/**
 * @format
 */

import * as React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import useFetchData from '../../hooks/useFetchData';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import ListItem from './ListItem';
import stylesFn from './List.styles';

function List(): React.JSX.Element {
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
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={<ListFooter data={response?.info} />}
      />
    </View>
  );
}

export default React.memo(List);
