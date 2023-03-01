import { formatInTimeZone } from 'date-fns-tz';
import enUS from 'date-fns/locale/en-GB';

const getTimezoneDateFromUtcDate = (utcDate, timezone) => {
  const date = new Date(utcDate);
  return formatInTimeZone(date, timezone, 'yyyy-MM-dd HH:mm:ss zzzz', { locale: enUS });
};

export default getTimezoneDateFromUtcDate;
