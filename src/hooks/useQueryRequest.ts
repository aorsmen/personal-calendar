import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

interface QueryRequest<TData = unknown> {
  url?: string;
  queryKeys: string;
  fetchConfig?: RequestInit;
  queryConfig?: any;
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
  onSettled?: (data: TData | undefined, error: Error | null) => void;
  initialData?: TData | (() => TData);
  queryFn?: (url: string, options: RequestInit) => Promise<TData>;
}

const defaultFetchConfig: RequestInit = {
  method: "GET",
};

const defaultQueryConfig: any = {
  refetchInterval: 0,
  refetchOnWindowFocus: false,
  cacheTime: 0,
};

const requestFn = (url: string, options: RequestInit) => {
  return () =>
    fetch(url, options)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Sorry, we could not process this request.");
        }
        return res.json();
      })
      .catch((error) => {
        throw error as Error;
      });
};

export const useQueryRequest = <TData = unknown>({
  queryKeys,
  url,
  fetchConfig = defaultFetchConfig,
  queryConfig,
  onSuccess,
  onError,
  onSettled,
  initialData,
  queryFn,
}: QueryRequest<TData>): UseQueryResult<TData, Error> => {
  // Create query
  const query = useQuery<TData, Error>({
    queryKey: [queryKeys],
    queryFn: queryFn || requestFn(url || "", fetchConfig),
    initialData,
    ...defaultQueryConfig,
    ...queryConfig,
  });

  // Keep callback refs stable
  const onSuccessRef = useRef(onSuccess);
  const onErrorRef = useRef(onError);
  const onSettledRef = useRef(onSettled);

  useEffect(() => {
    onSuccessRef.current = onSuccess;
    onErrorRef.current = onError;
    onSettledRef.current = onSettled;
  }, [onSuccess, onError, onSettled]);

  // Track fetching transitions
  const prevFetching = useRef(query.isFetching);
  const prevError = useRef<Error | null>(null);

  useEffect(() => {
    const justFinished = prevFetching.current && !query.isFetching;
    const justErrored =
      query.isError && query.error && prevError.current !== query.error;

    // SUCCESS
    if (justFinished && query.isSuccess && onSuccessRef.current) {
      onSuccessRef.current(query.data);
    }

    // ERROR
    if (justErrored && onErrorRef.current) {
      onErrorRef.current(query.error!);
    }

    // SETTLED
    if (justFinished && onSettledRef.current) {
      onSettledRef.current(query.data, query.error ?? null);
    }

    // update prev values
    prevFetching.current = query.isFetching;
    prevError.current = query.error ?? null;
  }, [
    query.isFetching,
    query.isSuccess,
    query.isError,
    query.data,
    query.error,
  ]);

  return query;
};
