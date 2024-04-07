/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = (colors: any) =>
  StyleSheet.create({
    WelcomeScreen: {
      flex: 1,
    },
    WelcomeScreenContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
    WelcomeScreenStatusBar: {
      backgroundColor: colors?.background,
    },
  });

export default stylesFn;
