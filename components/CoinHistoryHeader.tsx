import Image from "next/image";
import { ChangeEventHandler, Dispatch, FC, SetStateAction } from "react";
import useFetch from "../hooks/useFetch";
import { coinRankingConfig } from "../services/coinRanking";
import { Cryptocurrency } from "../typescript/Interfaces";

interface Props {
    timeframe: string[];
    setSelectedTimeFrame: Dispatch<SetStateAction<string>>;
    selectedTimeFrame: string;
    selectedCoinId: string | undefined | string[];
    handleCoinChange: ChangeEventHandler<HTMLSelectElement>;
}

type OtherCoins = Pick<Cryptocurrency, "id" | "symbol">;

const CoinHistoryHeader: FC<Props> = ({
    timeframe,
    selectedTimeFrame,
    setSelectedTimeFrame,
    selectedCoinId,
    handleCoinChange,
}) => {
    let { data, error, loading } = useFetch(`/coins`, coinRankingConfig);

    let coins: Cryptocurrency[] = data?.data.coins;

    let coinsSeclection: OtherCoins[] = coins?.map(({ id, symbol }) => ({
        id,
        symbol,
    }));

    return (
        <header className="cryptoDetail__history-header">
            <div className="cryptoDetail__timeframe">
                {timeframe.map((time) => (
                    <button
                        key={time}
                        className={`${
                            time === selectedTimeFrame ? "active" : ""
                        }`}
                        onClick={(e) => setSelectedTimeFrame(time)}
                    >
                        {time}
                    </button>
                ))}
            </div>
            <div className="cryptoDetail__history-others">
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error...</div>
                ) : (
                    coinsSeclection && (
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="cryptoDetail__history-form"
                        >
                            <div className="select-wrapper">
                                <select
                                    name="other coins"
                                    id="otherCoins"
                                    value={selectedCoinId}
                                    onChange={handleCoinChange}
                                    className=""
                                >
                                    {coinsSeclection.map(({ id, symbol }) => (
                                        <option value={id} key={id}>
                                            {symbol}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </form>
                    )
                )}
            </div>
        </header>
    );
};

export default CoinHistoryHeader;
