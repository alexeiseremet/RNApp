/**
 * @format
 */

import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import stylesFn from './TopBar.styles';

export default React.memo(function TopBarBackground(
  props: any,
): React.JSX.Element {
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
});
