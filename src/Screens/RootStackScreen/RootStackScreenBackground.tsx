/**
 * @format
 */

import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import stylesFn from './RootStackScreen.styles';

function RootStackScreenBackground(props) {
  const {style, ...rest} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.RootStackScreenBackground.backgroundColor}
      />
      <View style={[style, styles.RootStackScreenBackground]} {...rest} />
    </>
  );
}

export default React.memo(RootStackScreenBackground);
