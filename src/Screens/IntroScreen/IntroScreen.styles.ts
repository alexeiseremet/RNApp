/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = (colors: any) =>
  StyleSheet.create({
    IntroScreen: {
      flex: 1,
    },
    IntroScreenContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
    IntroScreenStatusBar: {
      backgroundColor: colors?.background,
    },
  });

export default stylesFn;
