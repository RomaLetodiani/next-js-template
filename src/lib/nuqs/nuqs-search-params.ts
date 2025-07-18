import { createSearchParamsCache, createSerializer, parseAsString } from 'nuqs/server';

export const searchParams = {
  q: parseAsString,
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);
