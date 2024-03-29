/**
 * @format
 */

import * as React from 'react';

import Tabs from '../Tabs/Tabs';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default React.memo(function TopBarTabs(): React.JSX.Element {
  const navigation = useNavigation();
  const onPressDark = React.useCallback(() => {
    Alert.alert(
      'About Credex',
      'Credex strives to make the borrowing process quick, easy, and transparent for their clients.',
    );
  }, []);

  const onPressLight = React.useCallback(
    () => navigation.navigate('Modal'),
    [navigation],
  );

  return (
    <Tabs
      items={[
        {title: 'Alert', onPress: onPressDark},
        {title: 'Modal', onPress: onPressLight},
      ]}
    />
  );
});
