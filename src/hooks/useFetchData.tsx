/**
 * @format
 */

import {
  type UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

interface FetchOpts {
  key: string;
  url: string;
  page?: number;
  filter?: string;
}

function useFetchData(opts: FetchOpts): UseInfiniteQueryResult {
  const {key, filter, page = 1} = opts;
  console.log(`=AAA= useFetchData.tsx ${Math.random()}`);

  return useInfiniteQuery({
    queryKey: [key, filter],
    queryFn: ({pageParam}) => fetchFn({...opts, page: pageParam}),
    getPreviousPageParam: res => {
      const params = getParamsURL(res?.info?.prev);
      return params.page;
    },
    getNextPageParam: res => {
      const params = getParamsURL(res?.info?.next);
      return params.page;
    },
    initialPageParam: page,
  });
}

export default useFetchData;

export async function fetchFn(opts: FetchOpts) {
  const {url, page, filter = ''} = opts;
  console.log('=AAA= fetchFn', `${url}?page=${page}${filter}`);

  try {
    const res = await fetch(`${url}?page=${page}${filter}`);
    const resJSON = await res.json();

    await sleep(1000);

    return resJSON;
  } catch (e) {
    console.log(e);
  }
}

export function getParamsURL(url: string): any {
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  const params: any = {};

  let match;
  while ((match = regex.exec(url))) {
    params[match[1]] = match[2];
  }

  return params;
}

export function sleep(delay: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, delay));
}
