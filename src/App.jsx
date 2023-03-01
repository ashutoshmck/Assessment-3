import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EVENT_DETAILS_ROUTE, HOME_ROUTE } from './constants/routes';
import Pages from './pages/index';
import EventContext from './contexts/EventsContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route
            path={HOME_ROUTE}
            element={(
              <EventContext.EventProvider>
                <Pages.HomePage />
              </EventContext.EventProvider>
)}
          />

          <Route
            path={EVENT_DETAILS_ROUTE}
            element={(
              <EventContext.EventProvider>
                <Pages.EventPage />
              </EventContext.EventProvider>
)}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
