import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import useSWR from "swr";

const useFetch = (fetchUrl: string, config: AxiosRequestConfig) => {
    let fetcher = (url: string) =>
        axios({ url, ...config })
            .then((res: AxiosResponse) => res.data)
            .catch((e: AxiosError) => {
                throw e;
            });

    let { data, error } = useSWR<any, AxiosError>(fetchUrl, fetcher);

    let loading: boolean = !data && !error;

    return { data, error, loading };
};

export default useFetch;
