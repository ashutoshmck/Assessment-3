export const BACKEND_URL = 'http://localhost:8000/';
export const EVENTS_URL = {
  url: 'api/events',
  method: 'get'
};

export const GET_EVENT_URL = (eventId) => ({
  url: `api/events/${eventId}`,
  method: 'get'
});
