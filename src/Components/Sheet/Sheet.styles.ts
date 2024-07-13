/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = () =>
  StyleSheet.create({
    Sheet: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 10,
    },
    SheetContainer: {
      padding: 15,
    },
    SheetContainerInner: {
      flex: 1,
      borderRadius: 15,
      backgroundColor: 'white',
      overflow: 'hidden',
    },
    SheetHeader: {
      height: 30,
    },
    SheetHeaderLine: {
      margin: 5,
      width: 20,
      height: 3,
      borderRadius: 3,
      backgroundColor: 'lightgrey',
      alignSelf: 'center',
    },
    SheetScrollView: {
      flex: 1,
    },
    SheetBackdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  });

export default stylesFn;
