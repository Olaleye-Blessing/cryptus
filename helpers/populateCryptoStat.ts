import millify from "millify";
import { GiRank3, GiWeightLiftingUp } from "react-icons/gi";
import { HiLink, HiOutlineAcademicCap } from "react-icons/hi";
import { IoLogoUsd } from "react-icons/io5";
import { RiExchangeLine } from "react-icons/ri";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { Stat } from "../typescript/Interfaces";

export const populateCryptoStat = (
    coinDetail: any,
    coinStats: Stat[],
    otherStats: Stat[]
): { coinStats: Stat[]; otherStats: Stat[] } => {
    coinStats = [
        { "text": "Rank", icon: GiRank3, value: coinDetail.rank },
        {
            "text": "Price In USD",
            icon: IoLogoUsd,
            value: millify(coinDetail.price),
        },
        {
            "text": "24h vol.",
            icon: GiWeightLiftingUp,
            value: millify(coinDetail.volume),
        },
        {
            "text": "Market Cap",
            icon: HiOutlineAcademicCap,
            value: millify(coinDetail.marketCap),
        },
    ];

    otherStats = [
        {
            "text": "Number Of Exchanges",
            icon: RiExchangeLine,
            value: millify(coinDetail.numberOfExchanges),
        },
        {
            "text": "Number of Markets",
            icon: HiOutlineAcademicCap,
            value: millify(coinDetail.numberOfMarkets),
        },
        {
            "text": "Total Supply",
            icon: VscTypeHierarchySuper,
            value: millify(coinDetail.totalSupply),
        },
        {
            "text": "Website Url",
            icon: HiLink,
            value: coinDetail.websiteUrl,
            link: true,
        },
    ];

    return { coinStats, otherStats };
};
