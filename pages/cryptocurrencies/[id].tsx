import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import useSWR from "swr";
import { cryptoFetcher } from "../../services/coinRanking";
import { CryptoStat } from "../../components";
import { populateCryptoStat } from "../../helpers/populateCryptoStat";
import { Stat } from "../../typescript/Interfaces";

const CryptoDetail: NextPage = () => {
    let { query }: NextRouter = useRouter();
    let coinId: string | string[] | undefined = query?.id;

    let { data: coinDetailData, error: coinDetailError }: any = useSWR(
        coinId ? `/coin/${coinId}` : null,
        cryptoFetcher
    );
    let coinDetailLoading: boolean = !coinDetailData && !coinDetailError;

    let coinDetail = coinDetailData?.data?.coin;

    let coinStats: Stat[] = [],
        otherStats: Stat[] = [];

    // populate stat when there is data
    if (coinDetail) {
        let populated = populateCryptoStat(coinDetail, coinStats, otherStats);
        coinStats = populated.coinStats;
        otherStats = populated.otherStats;
    }

    return (
        <>
            <header className="cryptoDetail__header">
                <h1>{coinDetail?.name}&apos;s Price</h1>
                <p>{coinDetail?.name} history price in US Dollars</p>
            </header>
            <main>{/* Graph */}</main>
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
        </>
    );
};

export default CryptoDetail;
