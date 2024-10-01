/**
 * @format
 */

import * as React from 'react';

import { View } from 'react-native';
import { useTheme as useRNTheme } from '@react-navigation/native';

import Link from '#/components/Link/Link';
import stylesFn from './List.styles';

export default React.memo(function ListItem(props: {
  data: unknown;
}): React.JSX.Element {
  const { colors } = useRNTheme();
  const styles = stylesFn(colors);

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
});
