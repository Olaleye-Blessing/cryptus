import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";

let headers: AxiosRequestHeaders = {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": String(process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY),
};

export const bingNews: AxiosInstance = axios.create({
    baseURL: "https://bing-news-search1.p.rapidapi.com/news",
    headers,
});

export const newsFetcher = (url: string) =>
    bingNews
        .get(url)
        .then((res) => res.data)
        .catch((e) => e);
