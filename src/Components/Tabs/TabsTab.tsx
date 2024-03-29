/**
 * @format
 */

import * as React from 'react';

import {Pressable, Text} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import stylesFn from './Tabs.styles';

export default React.memo(function TabsTab(props: any): React.JSX.Element {
  const {title, active, onPress} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors, active);
  console.log(`=AAA= TabsTab.tsx ${Math.random()}`);

  return (
    <Pressable onPress={onPress} style={[styles.TabsTab]}>
      <Text style={[styles.TabsTabTitle]}>{title}</Text>
    </Pressable>
  );
});
