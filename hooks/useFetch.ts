import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

const useFetch = (
  fetchUrl: string | null,
  config: AxiosRequestConfig,
  useSwrOptions?: Partial<PublicConfiguration> | undefined
) => {
  let fetcher = (url: string) =>
    axios({ url, ...config })
      .then((res: AxiosResponse) => res.data)
      .catch((e: AxiosError) => {
        throw e;
      });

  let { data, error } = useSWR<any, AxiosError>(
    fetchUrl,
    fetcher,
    useSwrOptions
  );

  let loading: boolean = !data && !error;

  return { data, error, loading };
};

export default useFetch;
