import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EVENT_DETAILS_ROUTE, HOME_ROUTE, ERROR_ROUTE } from './constants/routes';
import Pages from './pages/index';
import EventContext from './contexts/EventsContext';
import ThemeContext from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route
            path={HOME_ROUTE}
            element={(

              <ThemeContext.ThemeProvider>
                <EventContext.EventProvider>
                  <Pages.HomePage />
                </EventContext.EventProvider>
              </ThemeContext.ThemeProvider>
                  )}
          />

          <Route
            path={EVENT_DETAILS_ROUTE}
            element={(
              <ThemeContext.ThemeProvider>
                <EventContext.EventProvider>
                  <Pages.EventPage />
                </EventContext.EventProvider>
              </ThemeContext.ThemeProvider>
)}
          />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Pages.ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
