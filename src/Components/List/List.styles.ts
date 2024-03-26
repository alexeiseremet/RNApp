/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    List: {
      flex: 1,
    },
    ListHeader: {
      paddingHorizontal: 25,
      paddingTop: 25,
    },
    ListItem: {
      borderColor: colors?.border,
      borderBottomWidth: StyleSheet.hairlineWidth,
      paddingHorizontal: 25,
      marginBottom: 10,
    },
    ListFooter: {
      paddingHorizontal: 25,
      paddingBottom: 25,
    },
  });

export default stylesFn;
