/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/fontawesome-free-regular';
import { faBookmark as bookmarkSolid } from '@fortawesome/fontawesome-free-solid';
import { Link, useNavigate } from 'react-router-dom';
import { getTimezoneDateFromUtcDate } from '../../utils/common';
import { EVENT_DETAILS_ROUTE } from '../../constants/routes';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_EVENT_URL_BOOKMARK } from '../../constants/apiEndpoints';

function EventCard(props) {
  const {
    id,
    name, description, venue, date, timezone, img, bookmark, registered
  } = props;

  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(bookmark);
  const formattedDate = getTimezoneDateFromUtcDate(date, timezone);
  const handleBookmarkClick = async () => {
    setIsBookmarked(!isBookmarked);
    await makeRequest(UPDATE_EVENT_URL_BOOKMARK(id), navigate, {
      data: { isBookmarked: Boolean(isBookmarked) }
    });
  };
  return (
    <div className="eventCard">
      {/* eslint-disable-next-line quotes */}
      <div className="eventImg" onClick={() => navigate(`/event/${id}`, name)}>
        <img src={img} alt="Event" />
      </div>
      <div className="eventDetails">
        <p className="eventName">{name}</p>
        <p>{description}</p>
        <p>
          VENUE:
          {' '}
          {venue}
        </p>
        <p>
          DATE:
          {' '}
          {formattedDate}
        </p>

      </div>
      <div className="buttons">
        {isBookmarked
          ? (
            <button
              type="button"
              onClick={() => {
                event.stopPropagation();
                handleBookmarkClick();
              }}
            >
              <FontAwesomeIcon icon={faBookmark} color="#EA8282" />
            </button>
          )
          : <button type="button" onClick={handleBookmarkClick}><FontAwesomeIcon icon={bookmarkSolid} color="#EA8282" /></button>}
      </div>

    </div>

  // <button className="eventCardButton"
  // type="button" onClick={() => navigate(EVENT_DETAILS_ROUTE)}>

  // </button>

  );
}
EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  bookmark: PropTypes.bool.isRequired,
  registered: PropTypes.bool.isRequired
};

export default EventCard;
