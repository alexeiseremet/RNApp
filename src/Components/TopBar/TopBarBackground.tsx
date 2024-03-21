/**
 * @format
 */

import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import stylesFn from './TopBar.styles';

function TopBarBackground(props) {
  const {style, ...rest} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.TopBarBackground.backgroundColor}
        translucent={true}
      />
      <View style={[style, styles.TopBarBackground]} {...rest} />
    </>
  );
}

export default React.memo(TopBarBackground);
