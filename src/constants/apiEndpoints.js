export const BACKEND_URL = 'http://localhost:8000/';
export const EVENTS_URL = {
  url: 'api/events',
  method: 'get'
};

export const GET_EVENT_URL = (eventId) => ({
  url: `api/events/${eventId}`,
  method: 'get'
});
export const UPDATE_EVENT_URL_REGISTER = (eventId) => ({
  url: `api/events/${eventId}`,
  method: 'patch'
});
export const UPDATE_EVENT_URL_BOOKMARK = (eventId) => ({
  url: `api/events/${eventId}`,
  method: 'patch'
});
