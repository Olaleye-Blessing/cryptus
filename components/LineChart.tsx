import { FC } from "react";
import { Line } from "react-chartjs-2";

interface Props {
  labels: string[];
  prices: (string | number)[];
}

const LineChart: FC<Props> = ({ labels, prices }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price in USD",
        data: prices,
        fill: false,
        backgroundColor: "#2FB6F9",
        borderColor: "#00f",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
