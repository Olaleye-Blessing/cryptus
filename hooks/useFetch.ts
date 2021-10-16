import useSWR from "swr";

const useFetch = (url: string, fetcher: any) => {
    // console.log({ url });
    let { data, error } = useSWR(url, fetcher);

    let loading: boolean = !data && !error;

    return { data, error, loading };
};

export default useFetch;
