/**
 * @format
 */

import * as React from 'react';

import Icon from '#/components/Icon/Icon';
import HomeScreen from './HomeScreen/HomeScreen';
import ExploreScreen from './ExploreScreen/ExploreScreen';
import { BottomTab } from './helpersScreen';

const icons: Record<string, string> = {
  characters: "Home",
  explore: "Grill",
}

export default React.memo(function NestedStackScreen(): React.JSX.Element {
  return (
    <BottomTab.Navigator
      initialRouteName="explore"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarIcon: () => <Icon variant={icons[route.name]} width={32} height={32} />,
      })}>
      <BottomTab.Screen
        name="characters"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <BottomTab.Screen
        name="explore"
        component={ExploreScreen}
        options={{ title: 'Explore' }}
      />
    </BottomTab.Navigator>
  );
});
