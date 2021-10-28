import type { NextPage } from "next";
import Head from "next/head";

import {
    Coins,
    Exchanges,
    HomeStats,
    News,
    Nfts,
    HomeContainer,
} from "../components";
import { homeFeatures } from "../helpers/homeFeatures";
import secured from "./../assests/svg/secured.svg";
import homeBg from "./../assests/svg/home_header.svg";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="cryptocurrency, crypto, cryptocurrency news, nfts, exchanges"
                />
                <meta
                    name="description"
                    content="Get information about cryptocurrencies,
                    cryptocurrencies' news, nfts and exchanges"
                />
                <title>
                    CRYPTUS | Home of crypturrencies, nfts, exchanges and crypto
                    news
                </title>
            </Head>
            <header className="home__header">
                <h1 className="home__header-head">
                    Let&apos;s Make Better Life With New{" "}
                    <span className="text-blue-secondary">Currency</span>
                </h1>
                <p className="home__header-para">
                    Get real time monitoring cruptocurrency and help grow your
                    currency easily
                </p>
            </header>
            <main className="home">
                <section className="home__features">
                    <header className="home__features-header">
                        <div className="intro">What We Serve</div>
                        <h2 className="home__section-head">
                            Features That We Provide For You.
                        </h2>
                    </header>
                    <ul className="home__features-lists">
                        {homeFeatures.map(({ header, text, img }) => (
                            <li key={header} className="home__features-list">
                                <figure className="home__features-fig"></figure>
                                <h3>{header}</h3>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <HomeStats />
                <HomeContainer childrenClass="coins__cont">
                    <Coins numberOfCoins={10} showLoadMore={true} />
                </HomeContainer>
                <HomeContainer childrenClass="news__cont">
                    <News newsAmount={10} showLoadMore={true} />
                </HomeContainer>
                <HomeContainer childrenClass="nfts__cont">
                    <Nfts numberOfNfts={10} showLoadMore={true} />
                </HomeContainer>
                <HomeContainer childrenClass="exchanges__cont">
                    <Exchanges numberOfExchanges={10} showLoadMore={true} />
                </HomeContainer>
            </main>
        </>
    );
};

export default Home;
