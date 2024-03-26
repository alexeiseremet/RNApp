/**
 * @format
 */

import * as React from 'react';
import {View, Pressable} from 'react-native';
import {useTheme as useRNTheme} from '@react-navigation/native';

import Typography from '../Typography/Typography';
import stylesFn from './Link.styles';

function Link(props): React.JSX.Element {
  const {title, onPress, ...rest} = props;
  const {colors} = useRNTheme();
  const styles = stylesFn(colors);

  React.useEffect(() => {
    console.log('=AAA= Link.tsx []');
  }, []);

  console.log(`=AAA= Link.tsx ${Math.random()}`);

  return (
    <View style={styles.Link}>
      <View style={styles.LinkInner}>
        <Pressable onPress={onPress} {...rest}>
          <Typography unit="Link">{title}</Typography>
        </Pressable>
      </View>
    </View>
  );
}

export default React.memo(Link);
