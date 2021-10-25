import Head from "next/head";
import { FC } from "react";
import { News } from "../components";

const news: FC = () => {
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="cryptocurrency news, BTC news, Bitcoin news, ETH news, Etherum news"
                />
                <meta
                    name="description"
                    content="Get links to some cryptocurrency news"
                />
                <title>Crypto currency News | Cryptus</title>
                <meta
                    name="description"
                    content="Get global crypto news at ease "
                />
            </Head>
            <main className="news-page">
                <News newsAmount={100} showLoadMore={false} />
            </main>
        </>
    );
};

export default news;
