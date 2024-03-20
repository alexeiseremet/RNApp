/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = () =>
  StyleSheet.create({
    ModalScreen: {
      flex: 1,
    },
    ModalScreenBackground: {
      ...StyleSheet.absoluteFill,
      backgroundColor: 'rgba(249,249,249, 0.78)',
    },
    ModalScreenContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default stylesFn;
