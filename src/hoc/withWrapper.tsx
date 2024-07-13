/**
 * @format
 */

import * as React from 'react';

export default (function withWrapper(WrappedComponent: any) {
  return (props: any): React.JSX.Element => {
    React.useEffect(() => {
      console.log('=AAA= withWrapper.tsx []');
    }, []);

    return <WrappedComponent {...props} newProp="newProp by HOC" />;
  };
});
