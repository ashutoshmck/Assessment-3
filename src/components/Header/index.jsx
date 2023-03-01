/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/ThemeContext';
import { getThemeColor } from '../../utils/common';

function Header(props) {
  const { onClick } = props;
  const { color } = useContext(ThemeContext.ThemeContext);
  return (
    <div className="header" style={{ backgroundColor: color }}>
      <button type="button" onClick={onClick}>
        <p>
          EVENTIFY
        </p>

      </button>

    </div>
  );
}
Header.propTypes = {
  onClick: PropTypes.func
};
Header.defaultProps = {
  onClick: () => {}
};
export default Header;
