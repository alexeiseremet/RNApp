/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    Typography: {
      fontWeight: '300',
      fontSize: 16,
      color: colors.text,
    },
  });

export default stylesFn;
