/**
 * @format
 */

import * as React from 'react';
import { Header } from '@react-navigation/stack';
import type { StackHeaderProps } from '@react-navigation/stack';

import Typography from '../Typography/Typography';

export default React.memo(function TopBar(
  props: StackHeaderProps,
): React.JSX.Element {
  return (
    <>
      <Header {...props} />
      <Typography role="Title" align="center">
        Şeremet
      </Typography>
    </>
  );
});
