/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = (colors: any) =>
  StyleSheet.create({
    Display: {
      fontFamily: 'Onest-Bold',
      color: colors.text,
      fontSize: 44,
      lineHeight: 50,
      paddingVertical: 10,
    },
    Headline: {
      fontFamily: 'Onest-Bold',
      color: colors.text,
      fontSize: 34,
      lineHeight: 40,
      paddingVertical: 10,
    },
    Title: {
      fontFamily: 'Onest-Bold',
      color: colors.text,
      fontSize: 24,
      lineHeight: 30,
      paddingVertical: 10,
    },
    Subtitle: {
      fontFamily: 'Onest-Regular',
      color: colors.text,
      fontSize: 20,
      lineHeight: 26,
      paddingVertical: 10,
    },
    Body: {
      fontFamily: 'Onest-Light',
      color: colors.text,
      fontSize: 16,
      lineHeight: 24,
      paddingVertical: 10,
    },
    Link: {
      fontFamily: 'Onest-Bold',
      color: colors.text,
      fontSize: 16,
      lineHeight: 24,
    },
    Label: {
      fontFamily: 'Onest-Bold',
      color: colors.text,
      fontSize: 13,
      lineHeight: 24,
    },
    Group: {
      fontFamily: 'Onest-Regular',
      color: colors.text,
      fontSize: 13,
      lineHeight: 24,
      textTransform: 'uppercase',
    },
    Info: {
      fontFamily: 'Onest-Regular',
      color: colors.text,
      fontSize: 12,
      lineHeight: 14,
    },
    center: {
      textAlign: 'center',
    },
    right: {
      textAlign: 'right',
    },
  });

export default stylesFn;
