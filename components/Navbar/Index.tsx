import Link from "next/link";
import { FC, MouseEvent, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NextRouter, useRouter } from "next/dist/client/router";

import { NavLists } from "./NavLists";
import { NavList } from "../../typescript/Interfaces";
import { LiProps } from "../../typescript/types";
import { HomeLogo } from "./../index";

const Index: FC = () => {
    let navListsContRef: any = useRef(null);

    let { pathname }: NextRouter = useRouter();

    const toggleNav = (e: MouseEvent<HTMLButtonElement>): void => {
        navListsContRef.current.classList.toggle("nav__lists-cont-active");
    };

    useEffect(() => {
        navListsContRef.current.classList.remove("nav__lists-cont-active");
    }, [pathname]);

    return (
        <nav className="nav">
            <HomeLogo />
            <div ref={navListsContRef} className="nav__lists-cont">
                <ul className="nav__lists">
                    {NavLists.map(
                        (list: NavList): LiProps => (
                            <li key={list.text} className="nav__list">
                                <Link href={list.path}>
                                    <a
                                        className={`nav__link ${
                                            pathname === list.path
                                                ? "nav__link-active"
                                                : ""
                                        }`}
                                    >
                                        <span className="nav__link-icon">
                                            {pathname === list.path ? (
                                                <list.activeIcon />
                                            ) : (
                                                <list.icon />
                                            )}
                                        </span>
                                        <span className="nav__link-text">
                                            {list.text}
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className="nav__toggle">
                <button className="nav__toggle-btn" onClick={toggleNav}>
                    {<GiHamburgerMenu />}
                </button>
            </div>
        </nav>
    );
};

export default Index;
