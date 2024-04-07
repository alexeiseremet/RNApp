/**
 * @format
 */

import * as React from 'react';
import {BttomTab} from './helpers';

import HomeScreen from './HomeScreen/HomeScreen';
import ExploreScreen from './ExploreScreen/ExploreScreen';

export default React.memo(function NestedStackScreen(): React.JSX.Element {
  return (
    <BttomTab.Navigator
      initialRouteName="Explore"
      screenOptions={{headerShown: false}}>
      <BttomTab.Screen name="Characters" component={HomeScreen} />
      <BttomTab.Screen name="Explore" component={ExploreScreen} />
    </BttomTab.Navigator>
  );
});
