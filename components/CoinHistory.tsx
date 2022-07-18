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
    if (coinHistoryLoading) return <div>Loading Graph...</div>;
    if (coinHistoryError) return <div>Error..</div>;

    let { change, history } = coinGraph;

    let { prices, timeInterval } = formatTimeFrame(history, selectedTimeFrame);
    // console.log({ prices, timeInterval, history, selectedTimeFrame });

    return (
      <figure className="cryptoDetail__graph">
        <figcaption>Change: {change}%</figcaption>
        <LineChart labels={timeInterval} prices={prices} />
      </figure>
    );
  };

  return <>{displayGraph()}</>;
};

export default CoinHistory;
