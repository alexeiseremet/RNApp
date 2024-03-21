/**
 * @format
 */

import * as React from 'react';
import {Header} from '@react-navigation/stack';
import type {StackHeaderProps} from '@react-navigation/stack';

import TopBarBanner from './TopBarBanner';

function TopBar(props: StackHeaderProps) {
  return (
    <>
      <Header {...props} />
      <TopBarBanner {...props} />
    </>
  );
}

export default React.memo(TopBar);
