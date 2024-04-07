/**
 * @format
 */

import * as React from 'react';
import Config from 'react-native-config';
import {View, FlatList} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import useFetchData from '../../hooks/useFetchData';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import ListItem from './ListItem';
import stylesFn from './List.styles';

export default React.memo(function List(): React.JSX.Element {
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  const {data, fetchNextPage, isFetching, hasNextPage, isFetchingNextPage} =
    useFetchData({
      key: 'infiniteCharacters',
      url: `${Config.API_URL}/character/`,
      filters: '&status=alive&gender=female',
    });

  const flatData = normalizeData(data);

  const renderItem = React.useCallback(
    ({item, ...rest}: any) => <ListItem data={item} {...rest} />,
    [],
  );

  const onEndReachedHandler = React.useCallback(() => {
    if (hasNextPage && (!isFetching || !isFetchingNextPage)) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, isFetching, isFetchingNextPage]);

  return (
    <View style={styles.List}>
      <FlatList
        data={flatData}
        initialNumToRender={20}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={onEndReachedHandler}
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
});

export function normalizeData(data: any): Record<string, any>[] {
  const dataResults = data?.pages.map((page: {results: []}) => page?.results);
  const flatData = dataResults ? [].concat(...dataResults) : [];

  return flatData;
}
