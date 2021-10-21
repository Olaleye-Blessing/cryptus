import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nft as Props } from "../typescript/Interfaces";
import noImage from "./../assests/svg/available.svg";

const Nft: FC<Props> = ({
    // id,
    permalink,
    // token_id,
    assest_contract,
    // background_color,
    creator,
    name,
    image_url,
    collection,
}) => {
    let username = creator?.user?.username || "Unknown";
    return (
        <Link href={permalink}>
            <a target="_blank" rel="noopener" className="nft__link">
                <figure className="nft__figure">
                    <Image
                        src={image_url || noImage}
                        alt={``}
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="cover"
                        className="nft__figure-img"
                    />
                </figure>
                <section className="nft__detail">
                    <header>
                        <h3>{name}</h3>
                    </header>
                    <p>
                        <span>Creator</span>{" "}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();

                                window.open(
                                    `https://opensea.io/${username}`,
                                    "_blank"
                                );
                            }}
                        >
                            {username}
                        </button>
                    </p>
                    <p>
                        <span>Collection</span> <span>{collection.slug}</span>
                    </p>
                </section>
            </a>
        </Link>
    );
};

export default Nft;
