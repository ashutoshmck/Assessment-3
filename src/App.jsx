import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HOME_ROUTE } from './constants/routes';
import Pages from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Pages.HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
