import { Dispatch, FC, SetStateAction } from "react";
import { LineChart } from ".";
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

        let timeInterval: string[] = [];

        if (selectedTimeFrame === "24h") {
            timeInterval = history.map(({ timestamp }) =>
                new Date(timestamp).toLocaleTimeString()
            );
        } else {
            timeInterval = history.map((t) =>
                new Date(t.timestamp).toLocaleDateString()
            );
        }

        let prices = history.map((period) => period.price);

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
