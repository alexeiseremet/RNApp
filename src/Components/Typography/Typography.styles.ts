/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = colors =>
  StyleSheet.create({
    Paragraph: {
      color: colors.text,
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      paddingBottom: 20,
    },
    Hero: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 44,
      lineHeight: 46,
      paddingBottom: 10,
    },
    Headline: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 34,
      lineHeight: 36,
      paddingBottom: 10,
    },
    Heading: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 20,
      lineHeight: 22,
      paddingBottom: 5,
    },
    Subhead: {
      color: colors.text,
      fontWeight: '400',
      fontSize: 18,
      lineHeight: 20,
      paddingBottom: 5,
    },
    Link: {
      color: colors.text,
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 24,
    },
    Group: {
      color: colors.text,
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 16,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    Label: {
      color: colors.text,
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 24,
    },
    Info: {
      color: colors.text,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 13,
    },
  });

export default stylesFn;
