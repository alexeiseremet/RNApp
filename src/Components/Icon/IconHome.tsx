/**
 * @format
 */

import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default React.memo(function IconHome(
  props: SvgProps,
): React.JSX.Element {
  return (
    <Svg
      viewBox="0 -960 960 960"
      {...props}
    >
      <Path d="m480-840 440 330-48 64-72-54v380H160v-380l-72 54-48-64 440-330ZM294-478q0 53 57 113t129 125q72-65 129-125t57-113q0-44-30-73t-72-29q-26 0-47.5 10.5T480-542q-15-17-37.5-27.5T396-580q-42 0-72 29t-30 73Zm426 278v-360L480-740 240-560v360h480Zm0 0H240h480Z" />
    </Svg>
  );
});
