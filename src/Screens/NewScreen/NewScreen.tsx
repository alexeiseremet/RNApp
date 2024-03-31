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
import Grid from '../../Components/Grid/Grid';
import GridCol from '../../Components/Grid/GridCol';
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
            <Typography role="Display">Components.</Typography>
            <Typography role="Subtitle">Components are interactive building blocks for creating a user interface.</Typography>
            <Typography role="Info">
              NewScreen.tsx, {newProp}, {appState}
            </Typography>
            <Typography role="Body">___</Typography>

            <Grid>
              <GridCol col={3}>
                <Link
                  onPress={() => navigation.navigate('Modal')}
                  title="Modal"
                />
              </GridCol>
              <GridCol col={7}>
                <Link
                  onPress={() =>
                    navigation.navigate('NestedStack', {screen: 'Home'})
                  }
                  title="BottomTab"
                />
              </GridCol>
            </Grid>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default React.memo(withWrapper(NewScreen));
