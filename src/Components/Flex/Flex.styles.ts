/**
 * @format
 */

import { StyleSheet } from 'react-native';

const stylesFn = () =>
  StyleSheet.create({
    Flex: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    FlexFloat: {
      flexGrow: 99,
      flex: 1,
    },
    FlexEqual: {
      flexGrow: 1,
      flex: 1,
    },
  });

export default stylesFn;
