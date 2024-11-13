/**
 * @format
 */

import * as React from 'react';
import { View } from 'react-native';
import { Header } from '@react-navigation/stack';
import type { StackHeaderProps } from '@react-navigation/stack';
import { useTheme as useRNTheme } from '@react-navigation/native';

import Typography from '#/components/Typography/Typography';
import stylesFn from './TopBar.styles';

export default React.memo(function TopBar(
  props: StackHeaderProps,
): React.JSX.Element {
  const { colors } = useRNTheme();
  const styles = stylesFn(colors);

  return (
    <View>
      <Header {...props} />
      <Typography role="Title" align="center" backgroundColor={styles.TopBarBackground.backgroundColor}>
        Şeremet
      </Typography>
    </View>
  );
});
