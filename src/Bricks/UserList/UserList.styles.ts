/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    UserList: {
      flex: 1,
    },
    UserListItem: {
      flex: 1,
      borderColor: colors?.border,
      borderBottomWidth: StyleSheet.hairlineWidth,
      padding: 10,
    },
  });

export default stylesFn;
