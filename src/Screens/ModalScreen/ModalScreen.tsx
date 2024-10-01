/**
 * @format
 */

import * as React from 'react';
import { View, Pressable } from 'react-native';

import Typography from '#/components/Typography/Typography';
import stylesFn from './ModalScreen.styles';

function ModalScreen(): React.JSX.Element {
  const styles = stylesFn();

  return (
    <View style={styles.ModalScreen}>
      <View style={styles.ModalScreenContainer}>
        <Pressable
          style={styles.ModalScreenBackdrop}
          onPress={() => {
            console.log('=AAA= ModalScreen.tsx} onPressBackdrop');
          }}
        />

        <Typography role="Body">ModalScreen.tsx</Typography>
      </View>
    </View>
  );
}

export default React.memo(ModalScreen);
