/**
 * @format
 */

import * as React from 'react';
import {
  type StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Typography from '../Components/Typography/Typography';
import TopBar from '../Components/TopBar/TopBar';
import TopBarTabs from '../Components/TopBar/TopBarTabs';
import TopBarBackground from '../Components/TopBar/TopBarBackground';

export const RootStack = createStackNavigator();
export const BttomTab = createBottomTabNavigator();

export const headerConfig: StackNavigationOptions = {
  headerMode: 'screen',
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  header: (props: any) => <TopBar {...props} />,
  headerBackground: (props: any) => <TopBarBackground {...props} />,
};

export const headerElements: StackNavigationOptions = {
  headerLeft: (props: any) => (
    <Typography role="Label" {...props}>
      abc
    </Typography>
  ),
  headerTitle: (props: any) => <TopBarTabs {...props} />,
  headerRight: (props: any) => (
    <Typography role="Label" {...props}>
      def
    </Typography>
  ),
};
