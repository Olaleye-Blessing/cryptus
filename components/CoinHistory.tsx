import { Dispatch, FC, SetStateAction } from "react";
import { LineChart } from ".";
import { formatTimeFrame } from "../helpers/formatCoinHistoryTimeFrame";
import { CoinHistory as CoinHistoryProps } from "./../typescript/Interfaces";

interface Props {
    timeframe: string[];
    selectedTimeFrame: string;
    setSelectedTimeFrame: Dispatch<SetStateAction<string>>;
    coinHistoryLoading: boolean;
    coinHistoryError: any;
    coinGraph: CoinHistoryProps;
}

const CoinHistory: FC<Props> = ({
    timeframe,
    selectedTimeFrame,
    setSelectedTimeFrame,
    coinHistoryLoading,
    coinHistoryError,
    coinGraph,
}) => {
    const displayGraph = () => {
        if (coinHistoryLoading) return <div>Loading...</div>;
        if (coinHistoryError) return <div>Error..</div>;

        let { change, history } = coinGraph;

        let { prices, timeInterval } = formatTimeFrame(
            history,
            selectedTimeFrame
        );

        return (
            <figure className="cryptoDetail__graph">
                <figcaption>Change: {change}%</figcaption>
                <LineChart labels={timeInterval} prices={prices} />
            </figure>
        );
    };

    return (
        <section>
            <header>
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
            </header>
            {displayGraph()}
        </section>
    );
};

export default CoinHistory;
