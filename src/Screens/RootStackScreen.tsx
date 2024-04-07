/**
 * @format
 */

import * as React from 'react';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import ModalScreen from './ModalScreen/ModalScreen';
import NestedStackScreen from './NestedStackScreen';
import {RootStack, headerConfig, headerElements} from './helpers';

export default React.memo(function RootStackScreen(): React.JSX.Element {
  return (
    <RootStack.Navigator initialRouteName="Welcome">
      <RootStack.Group
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
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
