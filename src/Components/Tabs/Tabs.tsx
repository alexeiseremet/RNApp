/**
 * @format
 */

import * as React from 'react';
import {View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import TabsTab from './TabsTab';
import stylesFn from './Tabs.styles';

export default React.memo(function Tabs(props: any): React.JSX.Element {
  const {items} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);

  return (
    <View style={styles.Tabs}>
      <View style={styles.TabsContainer}>
        {items.map(({title, onPress}: any, i: number) => (
          <TabsTab
            key={title}
            title={title}
            onPress={onPress}
            active={i === 0}
          />
        ))}
      </View>
    </View>
  );
});
