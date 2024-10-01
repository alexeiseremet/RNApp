/**
 * @format
 */

import { StyleSheet } from 'react-native';

const stylesFn = () =>
  StyleSheet.create({
    ModalScreen: {
      flex: 1,
    },
    ModalScreenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    ModalScreenBackdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(249, 249, 249, 1)',
    },
  });

export default stylesFn;
