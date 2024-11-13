/**
 * @format
 */

import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import Icon from '#/components/Icon/Icon';

export default React.memo(function TopBarBack(props: any): React.JSX.Element | null {
  const navigation = useNavigation();

  if (!navigation?.canGoBack()) {
    return null;
  }

  return (
    <Pressable onPress={navigation?.goBack} style={{ padding: 5 }}>
      <Icon variant="Back" width={24} height={24} />
    </Pressable>
  );
});
