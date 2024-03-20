/**
 * @format
 */

import * as React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import RootStackScreen from './src/Screens/RootStackScreen/RootStackScreen';

function App(): React.JSX.Element {
  console.log(`=AAA= App.tsx ${Math.random()}`);
  const isDarkMode = useColorScheme() === 'dark';

  const NavigationContainerLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(96, 108, 56)',
      card: 'rgb(221, 161, 94)',
      background: isDarkMode ? 'rgb(40, 54, 24)' : 'rgb(254, 250, 224)',
      text: isDarkMode ? 'rgb(254, 250, 224)' : 'rgb(40, 54, 24)',
      border: 'rgba(188, 108, 37, 1)',
      notification: 'rgb(188, 108, 37)',
    },
  };

  React.useEffect(() => {
    console.log('=AAA= App.tsx []');
  }, []);

  return (
    <NavigationContainer theme={NavigationContainerLightTheme}>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;
