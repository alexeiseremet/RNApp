/**
 * @format
 */

import * as React from 'react';
import { View, Pressable } from 'react-native';
import { useTheme as useRNTheme } from '@react-navigation/native';

import Typography from '#/components/Typography/Typography';
import stylesFn from './Link.styles';

export default React.memo(function Link(props: any): React.JSX.Element {
  const { title, onPress, ...rest } = props;
  const { colors } = useRNTheme();
  const styles = stylesFn(colors);

  return (
    <View style={styles.Link}>
      <View style={styles.LinkInner}>
        <Pressable onPress={onPress} {...rest}>
          <Typography role="Link">{title}</Typography>
        </Pressable>
      </View>
    </View>
  );
});
