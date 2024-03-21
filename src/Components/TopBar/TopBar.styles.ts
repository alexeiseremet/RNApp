/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    TopBarBackground: {
      backgroundColor: colors?.notification,
      flex: 1,
    },
    TopBarBanner: {
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
