/**
 * @format
 */

import {
  type StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Typography from '#/components/Typography/Typography';
import TopBar from '#/components/TopBar/TopBar';
import TopBarTabs from '#/components/TopBar/TopBarTabs';
import TopBarBackground from '#/components/TopBar/TopBarBackground';
import Icon from '#/components/Icon/Icon';

export const RootStack = createStackNavigator();
export const BottomTab = createBottomTabNavigator();

export const headerConfig: StackNavigationOptions = {
  headerMode: 'screen',
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  header: (props: any) => <TopBar {...props} />,
  headerBackground: (props: any) => <TopBarBackground {...props} />,
};

export const headerElements: StackNavigationOptions = {
  headerLeft: (props: any) => (
    <Icon variant="Meta" width={24} height={24} {...props} />
  ),
  headerTitle: (props: any) => <TopBarTabs {...props} />,
  headerRight: (props: any) => (
    <Typography role="Label" {...props}>
      Text
    </Typography>
  ),
};
