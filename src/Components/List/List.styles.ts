/**
 * @format
 */

import { StyleSheet } from 'react-native';

const stylesFn = (colors: any) =>
  StyleSheet.create({
    List: {
      flex: 1,
    },
    ListHeader: {
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    ListItem: {
      borderColor: colors?.border,
      borderBottomWidth: StyleSheet.hairlineWidth,
      paddingHorizontal: 15,
      marginVertical: 5,
    },
    ListFooter: {
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
  });

export default stylesFn;
