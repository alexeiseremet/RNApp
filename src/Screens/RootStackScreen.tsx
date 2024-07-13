/**
 * @format
 */

import * as React from 'react';

import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import ModalScreen from './ModalScreen/ModalScreen';
import NestedStackScreen from './NestedStackScreen';
import {RootStack, headerConfig, headerElements} from './helpersScreen';

export default React.memo(function RootStackScreen(): React.JSX.Element {
  return (
    <RootStack.Navigator initialRouteName="welcome">
      <RootStack.Group
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <RootStack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{title: 'Welcome'}}
        />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          ...headerConfig,
          gestureEnabled: true,
        }}>
        <RootStack.Screen
          name="nested_stack"
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
        <RootStack.Screen
          name="modal"
          component={ModalScreen}
          options={{title: 'Modal'}}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
});
