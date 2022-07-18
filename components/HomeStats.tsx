import millify from "millify";
import { FC } from "react";
import useFetch from "../hooks/useFetch";
import { coinRankingConfig } from "../services/coinRanking";

const header = [
  { key: "totalCoins", value: 0, text: "Total Coins" },
  { key: "totalMarkets", value: 0, text: "Total Markets" },
  { key: "totalMarketCap", value: 0, text: "Total Market Cap" },
  { key: "totalExchanges", value: 0, text: "Total Exchanges" },
  { key: "total24hVolume", value: 0, text: "24h Volume" },
];

const HomeStats: FC = () => {
  let { data, loading, error } = useFetch("/stats", coinRankingConfig, {
    refreshInterval: 60 * 60 * 1000, // refetch stats after 1hr
    revalidateOnFocus: false,
  });

  let cryptoData = data?.data;

  let details = cryptoData
    ? header.map((head) => {
        let value = cryptoData[head.key];
        head.value = value;
        return head;
      })
    : [];

  return (
    <section className="home__stats-cont">
      <div className="home__section-cont">
        <header>
          <div className="intro">
            Updates every <span>1 hour</span>
          </div>
          <h2 className="home__section-head">Global Crypto Stats</h2>
        </header>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error...</div>
        ) : (
          <>
            <ul className="home__stats">
              {details.map((detail) => (
                <li key={detail.key} className="home__stats-list">
                  <h4>{detail.text}</h4>
                  <p>{millify(detail.value)}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default HomeStats;
