/**
 * @format
 */

import * as React from 'react';

function withWrapper(Element) {
  return (props): React.JSX.Element => {
    React.useEffect(() => {
      console.log('=AAA= withWrapper.tsx []');
    }, []);

    return <Element {...props} newProp="newProp by HOC" />;
  };
}

export default withWrapper;
