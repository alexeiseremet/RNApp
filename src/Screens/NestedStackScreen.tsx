/**
 * @format
 */

import * as React from 'react';

import HomeScreen from './HomeScreen/HomeScreen';
import ExploreScreen from './ExploreScreen/ExploreScreen';
import {BottomTab} from './helpersScreen';

export default React.memo(function NestedStackScreen(): React.JSX.Element {
  return (
    <BottomTab.Navigator
      initialRouteName="explore"
      screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="characters"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <BottomTab.Screen
        name="explore"
        component={ExploreScreen}
        options={{title: 'Explore'}}
      />
    </BottomTab.Navigator>
  );
});
