/**
 * @format
 */

import * as React from 'react';

import Tabs from '#/components/Tabs/Tabs';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default React.memo(function TopBarTabs(): React.JSX.Element {
  const navigation = useNavigation();
  const onPressDark = React.useCallback(() => {
    Alert.alert('Discard changes', "Your updates won't be saved.", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Discard',
        onPress: () => console.log('Discard Pressed'),
        style: 'destructive',
      },
    ]);
  }, []);
  const onPressLight = React.useCallback(
    () => navigation.navigate('modal'),
    [navigation],
  );

  return (
    <Tabs
      items={[
        { title: 'Alert', onPress: onPressDark },
        { title: 'RN Modal', onPress: onPressLight },
      ]}
    />
  );
});
