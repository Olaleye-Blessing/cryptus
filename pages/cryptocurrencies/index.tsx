import Head from "next/head";
import { NextPage } from "next";
import { Coins } from "../../components";

const CryptoCurrencies: NextPage = () => {
    return (
        <>
            <Head>
                <meta
                    content="Cryptocurrencies' price, Bitcoin Trading, Ethereum price trend, BNB, CZ, BTC price, LTC price"
                    name="keywords"
                />
                <meta
                    content="Cryptus cryptocurrency market - The easiest way to know the last prices, coin market cap."
                    name="description"
                />
                <title>
                    Cryptocurrency Market | Coin Prices & Market Cap | Cryptus
                </title>
            </Head>
            <main className="coins__cont coins-page">
                <Coins numberOfCoins={100} showLoadMore={false} />
            </main>
        </>
    );
};

export default CryptoCurrencies;
