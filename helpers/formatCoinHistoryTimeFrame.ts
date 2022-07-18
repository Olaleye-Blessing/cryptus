import { CoinHistory } from "../typescript/Interfaces";
import { uniqueObjArray } from "./uniqueObjArray";

// convert timestamp from milliseconds to date and time
const splitTimeStampToDateAndTime = (timestamp: string) => {
  let [date, time] = new Date(Number(timestamp) * 1000)
    .toLocaleString()
    .split(",");

  time = time.trim();

  return { date, time };
};

interface FormatedHistoryTimeStamp {
  price: string | number;
  date: string;
  time: string;
}

// 24-hour timeframe
const format24H = (history: FormatedHistoryTimeStamp[]) => {
  let everyHourRegEx = /^\d{1,2}:(00|30)/; // return inteval of 30mins

  history = uniqueObjArray(history, "time"); // remove duplicate timestamps

  let filteredDetails = history.filter(({ time }) => everyHourRegEx.test(time));

  return convertDateOrTimeToTimestamp(filteredDetails, "time");
};

// 7-day timeframe
const format7D = (history: FormatedHistoryTimeStamp[]) => {
  let dayRedex = /^(00|12):/;

  return history
    .filter(({ time }) => dayRedex.test(time)) // return midday and midnight details
    .map(({ price, date, time }) => {
      return {
        price,
        // return today's date if the time is 00:00:00 otherwise time
        timestamp: time === "00:00:00" ? date : time,
      };
    });
};

// 30-day timeframe
const format30D = (history: FormatedHistoryTimeStamp[]) => {
  let filteredDetails = history.filter(({ time }) => time === "00:00:00"); // daily detail at 12:00:00 AM

  return convertDateOrTimeToTimestamp(filteredDetails, "date");
};

// 1-year timeframe
const format1Y = (history: FormatedHistoryTimeStamp[]) => {
  let firstDayOfEachMonthRegEx = /^01/;

  let filteredDetails = history.filter(({ date }) =>
    firstDayOfEachMonthRegEx.test(date)
  );

  return convertDateOrTimeToTimestamp(filteredDetails, "date");
};

// 5-year timeframe
const format5Y = (history: FormatedHistoryTimeStamp[]) => {
  // 5-year timeframe should be start and middle month in each year

  let timeFrame = /^01\/(01|06)/;

  let filteredDetails = history.filter(({ date }) => timeFrame.test(date));

  return convertDateOrTimeToTimestamp(filteredDetails, "date");
};

const convertDateOrTimeToTimestamp = (
  formattedHistory: FormatedHistoryTimeStamp[],
  unit: keyof FormatedHistoryTimeStamp
) => {
  return formattedHistory.map((history) => ({
    price: history.price,
    timestamp: history[unit],
  }));
};

interface period {
  [key: string]: Function;
}

const Periods: period = {
  "24h": format24H,
  "7d": format7D,
  "30d": format30D,
  "1y": format1Y,
  "5y": format5Y,
};

export const formatTimeFrame = (
  history: CoinHistory["history"],
  period: string
) => {
  let formatedHistoryTimestamp: FormatedHistoryTimeStamp[] = history.map(
    ({ timestamp, price }) => {
      let { date, time } = splitTimeStampToDateAndTime(timestamp);
      return { price, date, time };
    }
  );

  let formatedHistory: CoinHistory["history"] = [];

  formatedHistory = Periods[period](formatedHistoryTimestamp).reverse(); // reverse the array to get latest timestamp first

  const includeLatestDetail = () => {
    let latestHistoryTime = formatedHistoryTimestamp.at(-1);
    let latestFormattedTime = formatedHistory.at(-1);

    if (!latestFormattedTime || !latestHistoryTime) return; // avoid typescript error of `Object is possibly 'undefined'`

    if (latestFormattedTime.timestamp !== latestHistoryTime.time) {
      formatedHistory = [
        ...formatedHistory,
        {
          price: latestHistoryTime.price,
          timestamp: latestHistoryTime.time,
        },
      ];
    }
  };

  includeLatestDetail();

  let timeInterval = formatedHistory.map(({ timestamp }) => timestamp);
  let prices = formatedHistory.map(({ price }) => price);

  return { prices, timeInterval };
};
