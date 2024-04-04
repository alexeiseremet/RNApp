/**
 * @format
 */

import * as React from 'react';
import {BttomTab} from './helpers';

import HomeScreen from './HomeScreen/HomeScreen';
import DemoScreen from './DemoScreen/DemoScreen';

export default React.memo(function NestedStackScreen(): React.JSX.Element {
  return (
    <BttomTab.Navigator
      initialRouteName="Demo"
      screenOptions={{headerShown: false}}>
      <BttomTab.Screen name="Characters" component={HomeScreen} />
      <BttomTab.Screen name="Demo" component={DemoScreen} />
    </BttomTab.Navigator>
  );
});
