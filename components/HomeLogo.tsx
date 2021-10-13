import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import siteLogo from "./../assests/svg/logo.svg";

const HomeLogo: FC = () => {
    return (
        <Link href="/">
            <a className="homelogo">
                <figure className="homelogo__icon">
                    <Image src={siteLogo} alt="site logo" />
                </figure>
                <div className="homelogo__text">Cryptus</div>
            </a>
        </Link>
    );
};

export default HomeLogo;
