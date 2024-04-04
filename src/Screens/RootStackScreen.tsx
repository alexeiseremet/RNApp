/**
 * @format
 */

import * as React from 'react';
import IntroScreen from './IntroScreen/IntroScreen';
import ModalScreen from './ModalScreen/ModalScreen';
import NestedStackScreen from './NestedStackScreen';
import {RootStack, headerConfig, headerElements} from './helpers';

export default React.memo(function RootStackScreen(): React.JSX.Element {
  return (
    <RootStack.Navigator initialRouteName="Intro">
      <RootStack.Group
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <RootStack.Screen name="Intro" component={IntroScreen} />
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
