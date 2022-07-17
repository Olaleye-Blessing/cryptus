import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

let headers: AxiosRequestHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": String(process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY),
};

export const bingNewsConfig: AxiosRequestConfig = {
  method: "get",
  headers,
  baseURL: "https://bing-news-search1.p.rapidapi.com/news",
};
