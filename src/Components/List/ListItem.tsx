/**
 * @format
 */

import * as React from 'react';

import { Image, View } from 'react-native';
import { useTheme as useRNTheme } from '@react-navigation/native';

import Link from '#/components/Link/Link';
import stylesFn from './List.styles';
import Flex from '../Flex/Flex';
import FlexCol from '../Flex/FlexCol';

export default React.memo(function ListItem(props: {
  data: unknown;
}): React.JSX.Element {
  const { colors } = useRNTheme();
  const styles = stylesFn(colors);

  return (
    <View style={styles.ListItem}>
      <Flex>
        <FlexCol>
          <Image
            srcSet={`${props.data?.image} 2x`} alt={props.data?.name}
            style={{ width: 26, height: 26, marginRight: 10 }}
          />
        </FlexCol>
        <FlexCol size="Float">
          <Link
            onPress={() => {
              console.log(`=AAA= ListItem.tsx ${props.data?.name}`);
            }}
            title={props.data?.name}
          />
        </FlexCol>
      </Flex>
    </View>
  );
});
