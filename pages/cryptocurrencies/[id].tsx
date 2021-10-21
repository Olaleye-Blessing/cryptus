import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";

import { cryptoFetcher } from "../../services/coinRanking";
import { CryptoStat, CoinHistory } from "../../components";
import { populateCryptoStat } from "../../helpers/populateCryptoStat";
import { Stat } from "../../typescript/Interfaces";
import useFetch from "../../hooks/useFetch";

const CryptoDetail: NextPage = () => {
    let { query }: NextRouter = useRouter();
    let coinId: string | undefined | string[] = query?.id;

    const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>("24h");

    let {
        data,
        error: coinDetailError,
        loading: coinDetailLoading,
    } = useFetch(coinId ? `/coin/${coinId}` : null, cryptoFetcher);

    let {
        data: coinHistory,
        loading: coinHistoryLoading,
        error: coinHistoryError,
    } = useFetch(
        coinId ? `/coin/${coinId}/history/${selectedTimeFrame}` : null,
        cryptoFetcher
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
            <CoinHistory
                timeframe={timeframe}
                selectedTimeFrame={selectedTimeFrame}
                setSelectedTimeFrame={setSelectedTimeFrame}
                coinHistoryLoading={coinHistoryLoading}
                coinHistoryError={coinHistoryError}
                coinGraph={coinGraph}
            />
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
    );
};

export default CryptoDetail;
