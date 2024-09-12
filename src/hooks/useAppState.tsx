/**
 * @format
 */

import * as React from 'react';
import { AppState } from 'react-native';

function useAppState() {
  const [appStateInfo, setAppStateInfo] = React.useState(AppState.currentState);

  React.useEffect(() => {
    console.log(
      `=AAA= useAppState.tsx ${JSON.stringify(AppState)} ${Math.random()}`,
    );

    if (!AppState.isAvailable) {
      return;
    }

    const onChangeListener = AppState.addEventListener(
      'change',
      setAppStateInfo,
    );

    return () => onChangeListener.remove();
  }, []);

  return appStateInfo;
}

export default useAppState;
