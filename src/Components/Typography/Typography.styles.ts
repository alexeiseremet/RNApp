/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = (colors: any) =>
  StyleSheet.create({
    Display: {
      fontFamily: 'Onest',
      color: colors.text,
      fontWeight: '700',
      fontSize: 44,
      lineHeight: 50,
      paddingBottom: 10,
    },
    Headline: {
      fontFamily: 'Onest',
      color: colors.text,
      fontWeight: '700',
      fontSize: 34,
      lineHeight: 40,
      paddingBottom: 10,
    },
    Title: {
      fontFamily: 'Onest',
      color: colors.text,
      fontWeight: '700',
      fontSize: 24,
      lineHeight: 30,
      paddingBottom: 5,
    },
    Subtitle: {
      fontFamily: 'Onest',
      color: colors.text,
      fontWeight: '400',
      fontSize: 20,
      lineHeight: 26,
      paddingBottom: 5,
    },
    Body: {
      fontFamily: 'Onest',
      color: colors.text,
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      paddingBottom: 20,
    },
    Link: {
      fontFamily: 'Onest',
      color: colors.text,
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 24,
    },
    Group: {
      fontFamily: 'Onest',
      color: colors.text,
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 24,
      textTransform: 'uppercase',
    },
    Label: {
      fontFamily: 'Onest',
      color: colors.text,
      fontWeight: '700',
      fontSize: 13,
      lineHeight: 24,
    },
    Info: {
      fontFamily: 'Onest',
      color: colors.text,
      fontWeight: '400',
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
