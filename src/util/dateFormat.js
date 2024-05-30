import dayjs from "dayjs";
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export const dateFormat = (dateTime) => {
    return dayjs(dateTime).format('MMM D, YYYY');
}

export const timeAgo = (dateTime) => {
    return dayjs().to(dayjs(dateTime));
}
