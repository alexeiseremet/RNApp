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
      paddingHorizontal: 15,
      paddingTop: 25,
    },
    ListItem: {
      borderColor: colors?.border,
      borderBottomWidth: StyleSheet.hairlineWidth,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    ListFooter: {
      paddingHorizontal: 15,
      paddingBottom: 25,
    },
  });

export default stylesFn;
