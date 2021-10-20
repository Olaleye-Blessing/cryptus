import millify from "millify";
import { FC } from "react";

interface homestats {
    cryptoStatLoading: boolean;
    cryptoStatError: string;
    cryptoData: any;
}

const HomeStats: FC<homestats> = ({
    cryptoStatLoading,
    cryptoStatError,
    cryptoData,
}) => {
    return (
        <section className="home__stats-cont">
            <div className="home__section-cont">
                <header>
                    <div className="intro">
                        Updates every <span>1 hour</span>
                    </div>
                    <h2 className="home__section-head">Global Crypto Stats</h2>
                </header>
                {cryptoStatLoading ? (
                    <div>Loading...</div>
                ) : cryptoStatError ? (
                    <div>Error...</div>
                ) : (
                    <ul className="home__stats">
                        {Object.keys(cryptoData).map((key: string) => (
                            <li key={key} className="home__stats-list">
                                <h4>{key}</h4>
                                <p>{millify(cryptoData[key])}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default HomeStats;
