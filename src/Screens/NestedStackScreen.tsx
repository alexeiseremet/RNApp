/**
 * @format
 */

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();

function NestedStackScreen(): React.JSX.Element {
  React.useEffect(() => {
    console.log('=AAA= NestedStackScreen.tsx []');
  }, []);

  console.log(`=AAA= NestedStackScreen.tsx ${Math.random()}`);

  return (
    <Tab.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default React.memo(NestedStackScreen);
