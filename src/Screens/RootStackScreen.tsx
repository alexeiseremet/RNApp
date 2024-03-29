/**
 * @format
 */

import * as React from 'react';
import NewScreen from './NewScreen/NewScreen';
import ModalScreen from './ModalScreen/ModalScreen';
import NestedStackScreen from './NestedStackScreen';
import {RootStack, headerConfig, headerElements} from './helpers';

export default React.memo(function RootStackScreen(): React.JSX.Element {
  React.useEffect(() => {
    console.log('=AAA= RootStackScreen.tsx []');
  }, []);

  console.log(`=AAA= RootStackScreen.tsx ${Math.random()}`);

  return (
    <RootStack.Navigator initialRouteName="New">
      <RootStack.Group
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <RootStack.Screen name="New" component={NewScreen} />
      </RootStack.Group>

      <RootStack.Group screenOptions={{...headerConfig, gestureEnabled: true}}>
        <RootStack.Screen
          name="NestedStack"
          component={NestedStackScreen}
          options={headerElements}
        />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          gestureEnabled: true,
          headerShown: false,
        }}>
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
});
