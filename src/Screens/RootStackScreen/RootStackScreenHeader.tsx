/**
 * @format
 */

import * as React from 'react';
import {Header} from '@react-navigation/stack';
import type {StackHeaderProps} from '@react-navigation/stack';

import RootStackScreenBanner from './RootStackScreenBanner';

function RootStackScreenHeader(props: StackHeaderProps) {
  return (
    <>
      <Header {...props} />
      <RootStackScreenBanner {...props} />
    </>
  );
}

export default React.memo(RootStackScreenHeader);
