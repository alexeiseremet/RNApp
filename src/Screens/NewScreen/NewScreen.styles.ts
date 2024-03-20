/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    NewScreen: {
      flex: 1,
    },
    NewScreenContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    NewScreenStatusBar: {
      backgroundColor: colors?.background,
    },
  });

export default stylesFn;
