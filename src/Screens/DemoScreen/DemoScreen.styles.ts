/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = (colors: any) =>
  StyleSheet.create({
    DemoScreen: {
      flex: 1,
      backgroundColor: colors?.background,
    },
  });

export default stylesFn;
