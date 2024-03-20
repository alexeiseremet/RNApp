/**
 * @format
 */

import * as React from 'react';

function useFetchData() {
  console.log(`=AAA= useFetchData.tsx ${Math.random()}`);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState({});
  const [response, setResponse] = React.useState([]);

  const fetchData = React.useCallback(async () => {
    console.log('=AAA= useFetchData.tsx B loading=true');
    setLoading(true);

    try {
      const res = await fetch(
        'https://json-placeholder.mock.beeceptor.com/users',
      );
      const jsonData = await res.json();
      console.log('=AAA= useFetchData.tsx C jsonData');
      setResponse(jsonData);
    } catch (e) {
      setError(e);
      console.error('Error fetching data:', e);
    }

    console.log('=AAA= useFetchData.tsx D');

    setTimeout(() => {
      console.log('=AAA= useFetchData.tsx F loading=false');
      setLoading(false);
    }, 1000);

    console.log('=AAA= useFetchData.tsx E');
  }, []);

  React.useEffect(() => {
    console.log('=AAA= useFetchData.tsx A []');
    fetchData();
  }, [fetchData]);

  return {loading, error, response};
}

export default useFetchData;
