import useSWR from "swr";

const useFetch = (url: string | null, fetcher: any) => {
    let { data, error } = useSWR(url, fetcher);

    let loading: boolean = !data && !error;

    return { data, error, loading };
};

export default useFetch;
