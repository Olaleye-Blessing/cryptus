import type { NextPage } from "next";
import Image from "next/image";
import useSWR from "swr";

import { cryptoFetcher } from "../services/coinRanking";
import { Coins, Exchanges, HomeStats, News, Nfts } from "../components";
import { homeFeatures } from "../helpers/homeFeatures";
import secured from "./../assests/svg/secured.svg";
import { nftFetcher } from "../services/nfts";
import useFetch from "../hooks/useFetch";

const Home: NextPage = () => {
    let {
        data,
        loading: cryptoStatLoading,
        error: cryptoStatError,
    } = useFetch("/stats", cryptoFetcher);

    let cryptoData = data?.data;

    return (
        <>
            <header className="home__header">
                <div>
                    <h1 className="home__header-head">
                        Let&apos;s Make Better Life With New{" "}
                        <span className="text-blue-secondary">Currency</span>
                    </h1>
                    <p className="home__header-para">
                        Get real time monitoring cruptocurrency and help grow
                        your currency easily
                    </p>
                </div>
                <figure className="home__header-fig">
                    <Image src={secured} alt="" className="home__header-img" />
                </figure>
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
                                <figure className="home__features-fig">
                                    <Image
                                        src={img}
                                        alt=""
                                        layout="responsive"
                                        width={30}
                                        height={30}
                                    />
                                </figure>
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
                <section className="coins-home coins__cont">
                    <Coins numberOfCoins={10} showLoadMore={true} />
                </section>
                <section className="news-home news__cont">
                    <News newsAmount={10} showLoadMore={true} />
                </section>
                <section className="nfts-home nfts__cont">
                    <Nfts numberOfNfts={10} showLoadMore={true} />
                </section>
                <section className="exchanges-home exchanges__cont">
                    <Exchanges numberOfExchanges={10} showLoadMore={true} />
                </section>
            </main>
        </>
    );
};

export default Home;
