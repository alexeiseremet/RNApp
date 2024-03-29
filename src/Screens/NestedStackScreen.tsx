/**
 * @format
 */

import * as React from 'react';
import {BttomTab} from './helpers';

import HomeScreen from './HomeScreen/HomeScreen';

export default React.memo(function NestedStackScreen(): React.JSX.Element {
  React.useEffect(() => {
    console.log('=AAA= NestedStackScreen.tsx []');
  }, []);

  console.log(`=AAA= NestedStackScreen.tsx ${Math.random()}`);

  return (
    <BttomTab.Navigator screenOptions={{headerShown: false}}>
      <BttomTab.Screen name="Characters" component={HomeScreen} />
      <BttomTab.Screen name="Search" component={HomeScreen} />
    </BttomTab.Navigator>
  );
});
