export const formatDate = (date: string): string => {
    let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hours = "" + d.getHours(),
        minute = "" + d.getMinutes();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (hours.length < 2) hours = "0" + hours;
    if (minute.length < 2) minute = "0" + minute;

    return `${[year, month, day].join("/")} ${hours}:${minute}`;
};
