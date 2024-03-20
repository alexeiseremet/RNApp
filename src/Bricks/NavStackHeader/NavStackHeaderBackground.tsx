/**
 * @format
 */

import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import stylesFn from './NavStackHeader.styles';

function NavStackHeaderBackground(props) {
  const {style, ...rest} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.NavStackHeaderBackground.backgroundColor}
      />
      <View style={[style, styles.NavStackHeaderBackground]} {...rest} />
    </>
  );
}

export default React.memo(NavStackHeaderBackground);
