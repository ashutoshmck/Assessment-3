/* eslint-disable jsx-a11y/label-has-associated-control */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp, faDotCircle } from '@fortawesome/fontawesome-free-solid';
import { faCircle } from '@fortawesome/fontawesome-free-regular';
import React, { useContext, useEffect, useState } from 'react';
import { EVENTS_URL } from '../../constants/apiEndpoints';
import Context from '../../contexts/EventsContext';
import makeRequest from '../../utils/makeRequest';
import EventCard from '../EventCard';
import './EventList.css';

function EventList() {
  // eslint-disable-next-line no-unused-vars
  const { eventData, setEventData } = useContext(Context.EventsContext);
  const [filter, setFilter] = useState('ALL');
  useEffect(() => {
    makeRequest(EVENTS_URL)
      .then((response) => {
        setEventData(response.sort((a, b) => new Date(b.date) - new Date(a.date)));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="eventsList">
      <div className="options">
        <div className="filter">
          <FontAwesomeIcon icon={faFilter} size="3x" />
          <p>{'  '}</p>
          <h1>Filter</h1>
          <p>{'  '}</p>
          <FontAwesomeIcon icon={faChevronUp} size="3x" />

        </div>
        <div className="filters">
          <div className="filterColumn1">
            <button type="button" className="radioButton" onClick={() => { setFilter('ALL'); }}>
              <div className="radioButtonContent">
                {filter !== 'ALL' ? <FontAwesomeIcon icon={faCircle} />
                  : <FontAwesomeIcon icon={faDotCircle} />}

                <p>ALL</p>
              </div>
            </button>
            <button type="button" className="radioButton" onClick={() => { setFilter('REGISTERED'); }}>
              <div className="radioButtonContent">
                {filter !== 'REGISTERED' ? <FontAwesomeIcon icon={faCircle} />
                  : <FontAwesomeIcon icon={faDotCircle} />}

                <p>REGISTERED</p>
              </div>
            </button>
          </div>
          <div className="filterColumn2">

            <button type="button" className="radioButton" onClick={() => { setFilter('BOOKMARKED'); }}>
              <div className="radioButtonContent">
                {filter !== 'BOOKMARKED' ? <FontAwesomeIcon icon={faCircle} />
                  : <FontAwesomeIcon icon={faDotCircle} />}

                <p>BOOKMARKED</p>
              </div>
            </button>
            <button type="button" className="radioButton" onClick={() => { setFilter('SEATS AVAILABLE'); }}>
              <div className="radioButtonContent">
                {filter !== 'SEATS AVAILABLE' ? <FontAwesomeIcon icon={faCircle} />
                  : <FontAwesomeIcon icon={faDotCircle} />}

                <p>SEATS AVAILABLE</p>
              </div>
            </button>
          </div>

        </div>
      </div>
      <div className="events">
        {eventData.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            name={event.name}
            description={event.description}
            venue={event.venue}
            date={event.datetime}
            timezone={event.timezone}
            img={event.imgUrl}
            bookmark={event.isBookmarked}
          />
        ))}
      </div>

    </div>
  );
}

export default EventList;
