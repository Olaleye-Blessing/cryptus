import { NavList } from "../../typescript/Interfaces";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { RiExchangeBoxLine, RiExchangeBoxFill } from "react-icons/ri";
import {
    HiOutlineCurrencyDollar,
    HiCurrencyDollar,
    HiAtSymbol,
    HiOutlineAtSymbol,
} from "react-icons/hi";

import { IoNewspaperOutline, IoNewspaperSharp } from "react-icons/io5";

export const NavLists: NavList[] = [
    {
        text: "Home",
        icon: AiOutlineHome,
        activeIcon: AiFillHome,
        path: "/",
    },
    {
        text: "Crytocurrencies",
        icon: HiOutlineCurrencyDollar,
        activeIcon: HiCurrencyDollar,
        path: "/cryptocurrencies",
    },
    {
        text: "Exchanges",
        icon: RiExchangeBoxLine,
        activeIcon: RiExchangeBoxFill,
        path: "/exchanges",
    },
    {
        text: "NFTs",
        icon: HiOutlineAtSymbol,
        activeIcon: HiAtSymbol,
        path: "/nfts",
    },
    {
        text: "News",
        icon: IoNewspaperOutline,
        activeIcon: IoNewspaperSharp,
        path: "/news",
    },
];
