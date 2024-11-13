/**
 * @format
 */

import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default React.memo(function IconBack(
  props: SvgProps,
): React.JSX.Element {
  return (
    <Svg
      viewBox="0 -960 960 960"
      {...props}
    >
      <Path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
    </Svg>
  );
});
