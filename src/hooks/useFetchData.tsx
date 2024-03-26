/**
 * @format
 */

import * as React from 'react';

function useFetchData() {
  console.log(`=AAA= useFetchData.tsx ${Math.random()}`);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState({});
  const [response, setResponse] = React.useState({});

  const fetchData = React.useCallback(async () => {
    console.log('=AAA= useFetchData.tsx B loading=true');

    try {
      setLoading(true);
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const jsonData = await res.json();
      console.log('=AAA= useFetchData.tsx C jsonData');
      setResponse(jsonData);
      setLoading(false);
    } catch (e) {
      setError(e);
      console.error('Error fetching data:', e);
    }

    console.log('=AAA= useFetchData.tsx D');
  }, []);

  React.useEffect(() => {
    console.log('=AAA= useFetchData.tsx A []');
    fetchData();
  }, [fetchData]);

  return {loading, error, response};
}

export default useFetchData;
