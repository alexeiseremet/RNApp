/**
 * @format
 */

import {StyleSheet} from 'react-native';

const stylesFn = (colors: any, active?: boolean) =>
  StyleSheet.create({
    Tabs: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      flexDirection: 'row',
    },
    TabsContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      backgroundColor: colors.card,
      borderRadius: 6,
      padding: 2,
    },
    TabsTab: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      borderRadius: 4,
      paddingHorizontal: 10,
      paddingVertical: 4,
      backgroundColor: active ? colors.primary : colors.card,
    },
    TabsTabTitle: {
      fontSize: 14,
      color: active ? 'white' : 'black',
      fontFamily: 'Onest',
    },
  });

export default stylesFn;
