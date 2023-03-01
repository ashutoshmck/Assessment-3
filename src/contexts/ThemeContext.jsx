/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [themes, setThemes] = useState(null);
  const [color, setColor] = useState('#00000');
  return (
    <ThemeContext.Provider value={{
      themes, setThemes, color, setColor
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
