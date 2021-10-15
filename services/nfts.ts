import axios, { AxiosInstance } from "axios";

export const nfts: AxiosInstance = axios.create({
    baseURL: "https://api.opensea.io/api/v1",
});

export const nftFetcher = (url: string) =>
    nfts
        .get(url)
        .then((res) => res.data)
        .catch((e) => e);
