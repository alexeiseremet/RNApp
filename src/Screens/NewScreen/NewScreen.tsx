/**
 * @format
 */

import * as React from 'react';
import {StatusBar, View, SafeAreaView, Pressable} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import withWrapper from '../../hoc/withWrapper';
import useAppState from '../../hooks/useAppState';
import Typography from '../../Bricks/Typography/Typography';
import stylesFn from './NewScreen.styles';

function NewScreen(props): React.JSX.Element {
  const {newProp, navigation} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  const appState = useAppState();

  console.log(`=AAA= NewScreen.tsx ${appState} ${Math.random()}`);

  React.useEffect(() => {
    console.log('=AAA= NewScreen.tsx []');
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.NewScreenStatusBar.backgroundColor}
      />

      <SafeAreaView style={styles.NewScreen}>
        <View style={styles.NewScreenContainer}>
          <View>
            <Typography>Mai dureaza cateva secunde.</Typography>
            <Typography>Multumim pentru rabdare.</Typography>
            <Typography>___</Typography>
            <Typography>NewScreen.tsx, {newProp}</Typography>
            <Typography>___</Typography>

            <Pressable onPress={() => navigation.navigate('Home')}>
              <Typography>{appState}</Typography>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default React.memo(withWrapper(NewScreen));