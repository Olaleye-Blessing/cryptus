import Head from "next/head";
import { FC } from "react";
import { Nfts } from "../components";

const nfts: FC = () => {
    return (
        <>
            <Head>
                <meta name="keywords" content="nfts, list of nfts" />
                <meta
                    name="description"
                    content="List of nfts, rare digital items and crypto collectibles"
                />
            </Head>
            <main className="nfts-page">
                <Nfts numberOfNfts={50} showLoadMore={false} />
            </main>
        </>
    );
};

export default nfts;
