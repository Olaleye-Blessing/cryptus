import millify from "millify";
import { FC } from "react";
import useFetch from "../hooks/useFetch";
import { coinRankingConfig } from "../services/coinRanking";

const HomeStats: FC = () => {
  let { data, loading, error } = useFetch("/stats", coinRankingConfig, {
    refreshInterval: 60 * 60 * 1000, // refetch stats after 1hr
    revalidateOnFocus: false,
  });

  let cryptoData = data?.data;

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
