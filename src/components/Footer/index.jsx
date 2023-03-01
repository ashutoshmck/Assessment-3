import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './Footer.css';

function Footer() {
  const { color } = useContext(ThemeContext.ThemeContext);
  return (
    <div className="footer" style={{ backgroundColor: color }} />
  );
}

export default Footer;
