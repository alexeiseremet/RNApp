/**
 * @format
 */

import * as React from 'react';
import {View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import List from '#/components/List/List';
import stylesFn from './HomeScreen.styles';

function HomeScreen(): React.JSX.Element {
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);

  React.useEffect(() => {
    console.log('=AAA= HomeScreen.tsx []');
  }, []);

  console.log(`=AAA= HomeScreen.tsx ${Math.random()}`);

  return (
    <View style={styles.HomeScreen}>
      <View style={styles.HomeScreenContainer}>
        <List />
      </View>
    </View>
  );
}

export default React.memo(HomeScreen);
