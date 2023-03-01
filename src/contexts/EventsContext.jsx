/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const EventsContext = createContext({});

function EventProvider({ children }) {
  const [eventData, setEventData] = useState([]);
  return (
    <EventsContext.Provider value={{
      eventData, setEventData
    }}
    >
      {children}
    </EventsContext.Provider>
  );
}
EventProvider.propTypes = {
  children: PropTypes.element.isRequired
};
export default { EventsContext, EventProvider };
