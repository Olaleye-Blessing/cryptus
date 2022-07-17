import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const headers: AxiosRequestHeaders = {
  "x-rapidapi-host": String(process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST),
  "x-rapidapi-key": String(process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY),
};

export const coinRankingConfig: AxiosRequestConfig = {
  method: "get",
  headers,
  baseURL: `https://coinranking1.p.rapidapi.com`,
};
