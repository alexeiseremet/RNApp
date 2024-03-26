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
      justifyContent: 'center',
      paddingHorizontal: 25,
    },
    NewScreenStatusBar: {
      backgroundColor: colors?.background,
    },
  });

export default stylesFn;
