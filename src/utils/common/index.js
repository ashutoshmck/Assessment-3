import { formatInTimeZone } from 'date-fns-tz';
import enUS from 'date-fns/locale/en-GB';

export const getTimezoneDateFromUtcDate = (utcDate, timezone) => {
  const date = new Date(utcDate);
  return formatInTimeZone(date, timezone, 'yyyy-MM-dd HH:mm:ss zzzz', { locale: enUS });
};
export const filterEvents = (filter, events) => {
  switch (filter) {
    case 'BOOKMARKED':
      return events.filter((event) => event.isBookmarked);
    case 'REGISTERED':
      return events.filter((event) => event.isRegistered);
    case 'SEATS AVAILABLE':
      return events.filter((event) => event.areSeatsAvailable);
    default:
      return events;
  }
};
