import { FC } from "react";
import { nftFetcher } from "../services/nfts";
import Link from "next/link";
import { Nft } from ".";
import useFetch from "../hooks/useFetch";
import { Nft as NftProps } from "../typescript/Interfaces";

interface nfts {
    numberOfNfts: number;
    showLoadMore: boolean;
}

const Nfts: FC<nfts> = ({ numberOfNfts, showLoadMore }) => {
    let { data, error, loading } = useFetch(
        `/assets?order_direction=desc&offset=0&limit=${numberOfNfts}`,
        nftFetcher
    );

    let nfts: NftProps[] = data?.assets;
    console.log(nfts && nfts[0]);

    return (
        <>
            <header
                className={`nfts__header ${
                    showLoadMore ? "" : "flex-wrap space-y-5"
                }`}
            >
                <h2>
                    Some Nfts(<span className="text-sm">from opensea</span>)
                </h2>
                {showLoadMore && (
                    <Link href="/news">
                        <a className="nfts__header-loadMore">Load More</a>
                    </Link>
                )}
            </header>
            <section>
                {loading && <div>Loading...</div>}
                {error && <div>There is an error</div>}
                {nfts && (
                    <ul className="nfts">
                        {nfts.map((nft) => (
                            <li key={nft.id} className="nft">
                                <Nft {...nft} />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </>
    );
};

export default Nfts;
