import { IconType } from "react-icons";

export interface NavList {
    text: string;
    icon: IconType;
    activeIcon: IconType;
    path: string;
}

export interface RapidBaseConfg {
    "x-rapidapi-host": string;
    "x-rapidapi-key": string;
}

export interface AxiosRes {
    status: string;
    data: any;
}

export interface cryptodata {
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: number;
    total24hVolume: number;
}

export interface Cryptocurrency {
    id: number;
    rank: number;
    name: string;
    iconUrl: string;
    volume: number;
    marketCap: number;
    price: number;
}

export interface CryptoStat {
    title: string;
    statistics: any[];
}

export interface Stat {
    text: string;
    value: string;
    icon: IconType;
    link?: boolean;
}
