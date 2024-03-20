/**
 * @format
 */

import * as React from 'react';
import {View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import UserList from '../../Bricks/UserList/UserList';
import stylesFn from './HomeScreen.styles';

function HomeScreen(): React.JSX.Element {
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  console.log(`=AAA= HomeScreen.tsx ${Math.random()}`);

  React.useEffect(() => {
    console.log('=AAA= HomeScreen.tsx []');
  }, []);

  return (
    <View style={styles.HomeScreen}>
      <UserList />
    </View>
  );
}

export default React.memo(HomeScreen);