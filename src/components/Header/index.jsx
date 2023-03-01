import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

function Header(props) {
  const { onClick } = props;
  return (
    <div className="header">
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
