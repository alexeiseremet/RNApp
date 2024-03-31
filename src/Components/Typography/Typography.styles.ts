/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    Display: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 44,
      lineHeight: 50,
      paddingBottom: 10,
      fontFamily: 'Onest',
    },
    Headline: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 34,
      lineHeight: 40,
      paddingBottom: 10,
      fontFamily: 'Onest',
    },
    Title: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 24,
      lineHeight: 30,
      paddingBottom: 5,
      fontFamily: 'Onest',
    },
    Subtitle: {
      color: colors.text,
      fontWeight: '400',
      fontSize: 20,
      lineHeight: 26,
      paddingBottom: 5,
      fontFamily: 'Onest',
    },
    Body: {
      color: colors.text,
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      paddingBottom: 20,
      fontFamily: 'Onest',
    },
    Link: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Onest',
    },
    Group: {
      color: colors.text,
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 24,
      textTransform: 'uppercase',
      fontFamily: 'Onest',
    },
    Label: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 13,
      lineHeight: 24,
      fontFamily: 'Onest',
    },
    Info: {
      color: colors.text,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 14,
      fontFamily: 'Onest',
    },
  });

export default stylesFn;
