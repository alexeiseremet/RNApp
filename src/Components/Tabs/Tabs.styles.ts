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
      justifyContent: 'center',
      paddingBottom: 10,
    },
    TabsContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      backgroundColor: colors.card,
      borderRadius: 6,
    },
    TabsTab: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      borderRadius: 4,
      paddingHorizontal: 12,
      paddingVertical: 4,
      margin: 2,
      backgroundColor: active ? colors.primary : colors.card,
      justifyContent: 'center',
    },
    TabsTabTitle: {
      color: active ? 'white' : 'black',
    },
  });

export default stylesFn;
