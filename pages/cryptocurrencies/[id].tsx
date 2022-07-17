import Head from "next/head";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import { CryptoStat, CoinHistory, CoinHistoryHeader } from "../../components";
import { populateCryptoStat } from "../../helpers/populateCryptoStat";
import { Stat } from "../../typescript/Interfaces";
import useFetch from "../../hooks/useFetch";
import { coinRankingConfig } from "../../services/coinRanking";

const CryptoDetail: NextPage = () => {
  let router: NextRouter = useRouter();
  let { query } = router;

  let coinId: string | undefined | string[] = query?.id;
  const [selectedCoinId, setSelectedCoinId] = useState(coinId);

  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>("24h");

  const changeCoinQuery = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    let { value } = target;
    setSelectedCoinId(value);
    query = { ...query, id: value };
    router.push({
      query,
    });
  };

  let {
    data,
    error: coinDetailError,
    loading: coinDetailLoading,
  } = useFetch(coinId ? `/coin/${coinId}` : null, coinRankingConfig);

  let {
    data: coinHistory,
    loading: coinHistoryLoading,
    error: coinHistoryError,
  } = useFetch(
    coinId ? `/coin/${coinId}/history/${selectedTimeFrame}` : null,
    coinRankingConfig
  );

  let timeframe: string[] = [
    // "3m",
    // "3h",
    "24h",
    "7d",
    "30d",
    "1y",
    // "3y",
    "5y",
  ];

  let coinDetail = data?.data?.coin;

  let coinStats: Stat[] = [],
    otherStats: Stat[] = [];

  let coinGraph = coinHistory?.data;

  // populate stat when there is data
  if (coinDetail) {
    let populated = populateCryptoStat(coinDetail, coinStats, otherStats);
    coinStats = populated.coinStats;
    otherStats = populated.otherStats;
  }

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
          {coinDetailLoading
            ? "Loading..."
            : coinDetailError
            ? "Error..."
            : `${coinDetail.name} details`}
        </title>
      </Head>
      <main className="cryptoDetail">
        <header className="cryptoDetail__header">
          {coinDetailLoading ? (
            <div>Loading...</div>
          ) : coinDetailError ? (
            <div>Error...</div>
          ) : (
            <>
              <h1>{coinDetail?.name}&apos;s Price</h1>
              <p>{coinDetail?.name} history price in US Dollars</p>
            </>
          )}
        </header>
        <section className="cryptoDetail__history">
          <CoinHistoryHeader
            timeframe={timeframe}
            selectedTimeFrame={selectedTimeFrame}
            setSelectedTimeFrame={setSelectedTimeFrame}
            selectedCoinId={selectedCoinId}
            handleCoinChange={changeCoinQuery}
          />
          <CoinHistory
            timeframe={timeframe}
            selectedTimeFrame={selectedTimeFrame}
            setSelectedTimeFrame={setSelectedTimeFrame}
            coinHistoryLoading={coinHistoryLoading}
            coinHistoryError={coinHistoryError}
            coinGraph={coinGraph}
          />
        </section>
        {coinDetailLoading ? (
          <div>Loading...</div>
        ) : coinDetailError ? (
          <div>Error...</div>
        ) : (
          <aside className="cryptoDetail__aside">
            <div className="cryptoDetail__stats-cont">
              {coinStats.length > 0 && (
                <CryptoStat
                  title={`${coinDetail.name} Main Statistics`}
                  statistics={coinStats}
                />
              )}
              {otherStats.length > 0 && (
                <CryptoStat
                  title={`${coinDetail.name} Other Statistics`}
                  statistics={otherStats}
                />
              )}
            </div>
          </aside>
        )}
      </main>
    </>
  );
};

export default CryptoDetail;
