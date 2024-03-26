/**
 * @format
 */

import * as React from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import withWrapper from '../../hoc/withWrapper';
import useAppState from '../../hooks/useAppState';
import Typography from '../../Components/Typography/Typography';
import Link from '../../Components/Link/Link';
import stylesFn from './NewScreen.styles';

function NewScreen(props): React.JSX.Element {
  const {newProp, navigation} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  const appState = useAppState();

  React.useEffect(() => {
    console.log('=AAA= NewScreen.tsx []');
  }, []);

  console.log(`=AAA= NewScreen.tsx ${appState} ${Math.random()}`);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.NewScreenStatusBar.backgroundColor}
        translucent={true}
      />

      <SafeAreaView style={styles.NewScreen}>
        <View style={styles.NewScreenContainer}>
          <View>
            <Typography unit="Hero">Multumim pentru rabdare.</Typography>
            <Typography unit="Subhead">Mai dureaza cateva secunde.</Typography>
            <Typography unit="Info">
              NewScreen.tsx, {newProp}, {appState}
            </Typography>
            <Typography unit="Paragraph">___</Typography>

            <Link onPress={() => navigation.navigate('Modal')} title="Modal" />
            <Typography />
            <Link
              onPress={() =>
                navigation.navigate('NestedStack', {screen: 'Home'})
              }
              title="Tab"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default React.memo(withWrapper(NewScreen));
