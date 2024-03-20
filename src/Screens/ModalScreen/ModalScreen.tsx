/**
 * @format
 */

import * as React from 'react';
import {View, Pressable} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import Typography from '../../Bricks/Typography/Typography';
import stylesFn from './ModalScreen.styles';

function ModalScreen(props): React.JSX.Element {
  const {onPressBackground} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);

  React.useEffect(() => {
    console.log('=AAA= ModalScreen.tsx []');
  }, []);

  console.log(`=AAA= ModalScreen.tsx ${Math.random()}`);

  return (
    <>
      <View style={styles.ModalScreen}>
        <View style={styles.ModalScreenContainer}>
          <Pressable
            style={styles.ModalScreenBackground}
            onPress={onPressBackground}
          />

          <Typography>ModalScreen.tsx</Typography>
        </View>
      </View>
    </>
  );
}

export default React.memo(ModalScreen);
