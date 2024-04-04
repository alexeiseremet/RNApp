/**
 * @format
 */

import {StyleSheet} from 'react-native';

const getCols = cols => {
  const columns = {};

  for (let i = 1; i <= cols; i++) {
    columns[`GridCol${i}`] = {
      width: `${i * 10}%`,
      maxWidth: `${i * 10}%`,
    };
  }

  return columns;
};

const GridCols = getCols(10);

const stylesFn = () =>
  StyleSheet.create({
    Grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'flex-start',
    },
    ...GridCols, // GridCol1, GridCol2 ...
  });

export default stylesFn;
