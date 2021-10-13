import axios, { AxiosInstance } from "axios";

let headers = {
    "x-rapidapi-host": String(process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST),
    "x-rapidapi-key": String(process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY),
};

export const coinRankEndpoint = {};

export const cryptoRank: AxiosInstance = axios.create({
    baseURL: "https://coinranking1.p.rapidapi.com",
    headers,
});

export const cryptoFetcher = (url: string) =>
    cryptoRank
        .get(url)
        .then((res) => res.data)
        .catch((error) => {
            return error;
        });
