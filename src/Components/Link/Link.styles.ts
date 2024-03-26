/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    Link: {
      flexDirection: 'row',
    },
    LinkInner: {
      borderBottomWidth: 2,
      borderColor: colors.border,
    },
  });

export default stylesFn;