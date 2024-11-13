/**
 * @format
 */

import {
  type StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Typography from '#/components/Typography/Typography';
import TopBarHeader from '#/components/TopBar/TopBarHeader';
import TopBarTabs from '#/components/TopBar/TopBarTabs';
import TopBarBackground from '#/components/TopBar/TopBarBackground';
import TopBarLeftButton from '#/components/TopBar/TopBarLeftButton';

export const RootStack = createStackNavigator();
export const BottomTab = createBottomTabNavigator();

export const headerConfig: StackNavigationOptions = {
  headerMode: 'screen',
  headerTitleAlign: 'center',
  headerBackTitleStyle: false,
  headerBackground: (props: any) => <TopBarBackground {...props} />,
  header: (props: any) => <TopBarHeader {...props} />,
};

export const headerElements: StackNavigationOptions = {
  headerLeft: (props: any) => <TopBarLeftButton  {...props} />,
  headerTitle: (props: any) => <TopBarTabs {...props} />,
  headerRight: (props: any) => (
    <Typography role="Label" style={{ padding: 5 }} {...props}>
      Text
    </Typography>
  ),
};
