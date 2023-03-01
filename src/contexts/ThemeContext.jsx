/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [themes, setThemes] = useState([]);
  return (
    <ThemeContext.Provider value={{
      themes, setThemes
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired
};
export default { ThemeContext, ThemeProvider };
