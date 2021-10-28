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
    symbol: string;
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

export interface NewsArticleThumbnail {
    _type: string;
    contentUrl: string;
    width: number;
    height: number;
}

export interface NewsArticle {
    name: string;
    url: string;
    description: string;
    datePublished: string;
    image: {
        _type: string;
        thumbnail: NewsArticleThumbnail;
    };
    provider: any[];
}

export interface Nft {
    id: number;
    assest_contract: {
        address: string;
        created_date: string;
        description: string;
    };
    background_color: string | null;
    creator: {
        address: string;
        config: string;
        profile_img_url: string;
        user?: {
            username?: string;
        };
    };
    name: string;
    token_id: string | number;
    permalink: string;
    image_url: string;
    collection: {
        slug: string;
    };
}

export interface Exchange {
    description: string;
    iconUrl: string;
    id: number;
    // lastTickerCreatedAt: 1634308945000;
    marketShare: number;
    name: string;
    numberOfMarkets: number;
    rank: number;
    // uuid: "-zdvbieRdZ";
    verified: boolean;
    volume: number;
    websiteUrl: string;
}

export interface CoinHistory {
    change: string;
    history: { price: number | string; timestamp: string }[];
}

export interface CoinTimeFrame {}
