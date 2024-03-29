/**
 * @format
 */

import {
  type UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

function useFetchData(opts: FetchOpts): UseInfiniteQueryResult {
  const {key, page = 1} = opts;
  console.log(`=AAA= useFetchData.tsx ${Math.random()}`);

  return useInfiniteQuery({
    queryKey: [key],
    queryFn: ({pageParam}) => fetchFn({...opts, page: pageParam}),
    getPreviousPageParam: res => {
      const params = getParamsURL(res?.info?.prev);
      return params.page ?? undefined;
    },
    getNextPageParam: res => {
      const params = getParamsURL(res?.info?.next);
      return params.page ?? undefined;
    },
    initialPageParam: page,
    staleTime: 10000,
  });
}

export default useFetchData;

type FetchOpts = {
  key?: string;
  url?: string;
  page?: number;
  filters?: string;
};

export async function fetchFn(opts: FetchOpts): Promise<any> {
  const {url, page, filters = ''} = opts;

  try {
    await sleep(500);

    console.log('=AAA= fetchFn', `${url}?page=${page}${filters}`);

    const res = await fetch(`${url}?page=${page}${filters}`);
    const resJSON = await res.json();

    return resJSON;
  } catch (error) {
    throw new Error(error as string);
  }
}

export function getParamsURL(url: string): FetchOpts {
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  const params: {[index: string]: any} = {};

  let match;
  while ((match = regex.exec(url))) {
    params[match[1]] = match[2];
  }

  return params;
}

export function sleep(ms: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}
