/**
 * @format
 */

import * as React from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native';
import { useTheme as useRNTheme } from '@react-navigation/native';

import withWrapper from '#/hoc/withWrapper';
import useAppState from '#/hooks/useAppState';
import Typography from '#/components/Typography/Typography';
import Link from '#/components/Link/Link';
import Sheet from '#/components/Sheet/Sheet';
import stylesFn from './WelcomeScreen.styles';

function WelcomeScreen(props: any): React.JSX.Element {
  const { newProp, navigation } = props;
  const { colors } = useRNTheme();
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
          onPress={() => navigation.navigate('nested_stack', { screen: 'home' })}
        />
      </View>

      <Sheet params={{ height: 0.5 }}>
        <Typography role="Subtitle">
          Components are interactive building blocks for creating a user
          interface.
        </Typography>
        <Typography role="Body">
          X coordinate of the current position of the pointer (finger or a
          leading pointer when there are multiple fingers placed) relative to
          the window. The value is expressed in point units. It is recommended
          to use it instead of x in cases when the original view can be
          transformed as an effect of the gesture.{' '}
        </Typography>
        <Typography role="Body">
          X coordinate of the current position of the pointer (finger or a
          leading pointer when there are multiple fingers placed) relative to
          the window. The value is expressed in point units. It is recommended
          to use it instead of x in cases when the original view can be
          transformed as an effect of the gesture.{' '}
        </Typography>
        <Typography role="Body">
          X coordinate of the current position of the pointer (finger or a
          leading pointer when there are multiple fingers placed) relative to
          the window. The value is expressed in point units. It is recommended
          to use it instead of x in cases when the original view can be
          transformed as an effect of the gesture.{' '}
        </Typography>
      </Sheet>
    </SafeAreaView>
  );
}

export default React.memo(withWrapper(WelcomeScreen));
