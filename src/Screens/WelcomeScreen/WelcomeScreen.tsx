/**
 * @format
 */

import * as React from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import withWrapper from '../../hoc/withWrapper';
import useAppState from '../../hooks/useAppState';
import Typography from '../../Components/Typography/Typography';
import stylesFn from './WelcomeScreen.styles';
import Link from '../../Components/Link/Link';

function WelcomeScreen(props: any): React.JSX.Element {
  const {newProp, navigation} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  const appState = useAppState();

  return (
    <SafeAreaView style={styles.WelcomeScreen}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.WelcomeScreenStatusBar.backgroundColor}
        translucent={true}
      />

      <View style={styles.WelcomeScreenContainer}>
        <Typography role="Display">Components</Typography>
        <Typography role="Subtitle">
          Components are interactive building blocks for creating a user
          interface.
        </Typography>
        <Typography role="Info">
          WelcomeScreen.tsx, {newProp}, {appState}
        </Typography>
        <Typography role="Body">____</Typography>

        <Link
          title="Get started"
          onPress={() => navigation.navigate('NestedStack', {screen: 'Home'})}
        />
      </View>
    </SafeAreaView>
  );
}

export default React.memo(withWrapper(WelcomeScreen));
