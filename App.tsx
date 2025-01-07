/**
 * @format
 */

import * as React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import RootStackScreen from '#/screens/RootStackScreen';

const newQueryClient = new QueryClient();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const NavigationContainerLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(188, 108, 37)',
      card: 'rgb(221, 161, 94)',
      background: isDarkMode ? 'rgb(40, 54, 24)' : 'rgb(254, 250, 224)',
      text: isDarkMode ? 'rgb(254, 250, 224)' : 'rgb(40, 54, 24)',
      border: 'rgba(188, 108, 37, 1)',
      notification: 'rgb(96, 108, 56)',
    },
  };

  React.useEffect(() => {
    console.log('=AAA= App.tsx []');
  }, []);

  console.log(`=AAA= App.tsx ${Math.random()}`);

  return (
    <QueryClientProvider client={newQueryClient}>
      <NavigationContainer theme={NavigationContainerLightTheme}>
        <RootStackScreen />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
