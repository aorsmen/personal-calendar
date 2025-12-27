import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { ApiError } from "../types/errors";

const requestFn = async (
  url: string,
  payload: unknown,
  options: RequestInit
) => {
  options.body = JSON.stringify(payload);

  const res = await fetch(url, options);

  if (!res.ok) {
    let body: any = null;

    try {
      body = await res.json();
    } catch {
      body = await res.text();
    }
    throw new ApiError(res.status, body?.error ?? res.statusText, body);
  }

  return res.json();
};

interface MutationRequest {
  url: string;
  fetchConfig?: RequestInit;
}

const defaultFetchConfig: RequestInit = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
};

export const useMutationRequest = <TData = unknown, TVariables = unknown>({
  url,
  fetchConfig = {},
}: MutationRequest): UseMutationResult<TData, ApiError, TVariables> => {
  const config = { ...defaultFetchConfig, ...fetchConfig };

  return useMutation<TData, ApiError, TVariables>({
    mutationFn: (payload) => requestFn(url, payload, config),
  });
};
