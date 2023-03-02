/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './Footer.css';

function Footer() {
  const { themes, color, setColor } = useContext(ThemeContext.ThemeContext);
  const saveTheme = (id) => {

  };
  const changeTheme = (id) => {
    const newColor = themes.themes.filter((theme) => theme.id === id)[0].colorHexCode;
    setColor(newColor);
  };
  return (
    <div className="footer" style={{ backgroundColor: color }}>
      <div className="themes">
        <h1>THEMES</h1>
        {themes ? themes.themes.filter((theme) => theme.id !== themes.preferredThemeId)
          .map((theme) => (
            <button
              className="colorButton"
              type="button"
              onClick={() => changeTheme(theme.id)}
            >
              <div className="colorBox" style={{ backgroundColor: theme.colorHexCode }} />
            </button>
          )) : <div />}
      </div>
    </div>
  );
}

export default Footer;
