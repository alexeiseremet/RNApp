/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    NewScreen: {
      flex: 1,
    },
    NewScreenStatusBar: {
      backgroundColor: colors?.background,
    },
    NewScreenContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default stylesFn;
