/**
 * @format
 */

import * as React from 'react';
import {View, FlatList} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import useFetchData from '../../hooks/useFetchData';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import ListItem from './ListItem';
import stylesFn from './List.styles';

function List(): React.JSX.Element {
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  const {data, fetchNextPage, isFetching, isFetchingNextPage} = useFetchData({
    key: 'Characters',
    url: 'https://rickandmortyapi.com/api/character/',
    filter: '&status=alive&gender=female',
  });

  const flatData = normalizeData(data);

  const renderItem = React.useCallback(
    ({item, ...rest}: any) => <ListItem data={item} {...rest} />,
    [],
  );

  console.log(`=AAA= List.tsx ${Math.random()}`);

  return (
    <View style={styles.List}>
      <FlatList
        data={flatData}
        initialNumToRender={20}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => {
          if (!isFetching && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        // onRefresh={fetchNextPage}
        // refreshing={isFetching || isFetchingNextPage}
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={
          <ListFooter
            count={data?.pages[0]?.info?.count}
            loading={isFetching || isFetchingNextPage}
          />
        }
      />
    </View>
  );
}

export function normalizeData(data: any): Record<string, any>[] {
  const dataResults = data?.pages.map((page: {results: []}) => page?.results);
  const flatData = dataResults ? [].concat(...dataResults) : [];

  return flatData;
}

export default React.memo(List);
