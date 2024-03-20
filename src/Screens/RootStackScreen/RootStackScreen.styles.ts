/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    RootStackScreenBackground: {
      backgroundColor: colors?.primary,
      flex: 1,
    },
    RootStackScreenBanner: {
      color: colors?.notification,
      backgroundColor: colors?.card,
      textAlign: 'center',
      padding: 4,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
  });

export default stylesFn;
