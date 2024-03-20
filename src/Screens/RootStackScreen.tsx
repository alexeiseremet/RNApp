/**
 * @format
 */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewScreen from './NewScreen/NewScreen';
import ModalScreen from './ModalScreen/ModalScreen';
import Typography from '../Bricks/Typography/Typography';
import RootStackScreenHeader from '../Bricks/NavStackHeader/NavStackHeader';
import RootStackScreenBackground from '../Bricks/NavStackHeader/NavStackHeaderBackground';
import NestedStackScreen from './NestedStackScreen';

const RootStack = createStackNavigator();

const headerConfig = {
  headerMode: 'screen',
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  header: props => <RootStackScreenHeader {...props} />,
  headerBackground: props => <RootStackScreenBackground {...props} />,
};

const headerElements = {
  headerLeft: props => <Typography {...props}>Left</Typography>,
  headerRight: props => <Typography {...props}>Right</Typography>,
  headerTitle: props => <Typography {...props}>AAA</Typography>,
};

function RootStackScreen(): React.JSX.Element {
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
          initialParams={{author: 'Gandalf'}}
          options={headerElements}
        />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          gestureEnabled: true,
        }}>
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default React.memo(RootStackScreen);
