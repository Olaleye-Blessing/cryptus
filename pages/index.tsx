import type { NextPage } from "next";
import Image from "next/image";

import { cryptoFetcher } from "../services/coinRanking";
import { Coins, Exchanges, HomeStats, News, Nfts } from "../components";
import { homeFeatures } from "../helpers/homeFeatures";
import secured from "./../assests/svg/secured.svg";
import homeBg from "./../assests/svg/home_header.svg";
import useFetch from "../hooks/useFetch";

const Home: NextPage = () => {
    let {
        data,
        loading: cryptoStatLoading,
        error: cryptoStatError,
    } = useFetch("/stats", cryptoFetcher);

    let cryptoData = data?.data;
    console.log({ cryptoStatError });

    return (
        <>
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
                <HomeStats
                    cryptoData={cryptoData}
                    cryptoStatError={cryptoStatError}
                    cryptoStatLoading={cryptoStatLoading}
                />
                <section className="home__coins coins__cont">
                    <div className="home__section-cont">
                        <Coins numberOfCoins={10} showLoadMore={true} />
                    </div>
                </section>
                <section className="home__news news__cont">
                    <div className="home__section-cont">
                        <News newsAmount={10} showLoadMore={true} />
                    </div>
                </section>
                <section className="home__nfts nfts__cont">
                    <div className="home__section-cont">
                        <Nfts numberOfNfts={10} showLoadMore={true} />
                    </div>
                </section>
                <section className="home__exchanges exchanges__cont">
                    <div className="home__section-cont">
                        <Exchanges numberOfExchanges={10} showLoadMore={true} />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
