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
import { filterEvents } from '../../utils/common';

function EventList() {
  // eslint-disable-next-line no-unused-vars
  const { eventData, setEventData } = useContext(Context.EventsContext);
  const [filter, setFilter] = useState('ALL');
  const [filteredEvents, setFilteredEvents] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('');
  useEffect(() => {
    makeRequest(EVENTS_URL)
      .then((response) => {
        setEventData(response.sort((a, b) => new Date(b.date) - new Date(a.date)));
        setFilteredEvents(response.sort((a, b) => new Date(b.date) - new Date(a.date)));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSearch = (searchParam) => {
    if (searchParam === '') {
      setSearch(searchParam);
      // setFilteredEvents(filteredEvents);
    } else {
      setSearch(searchParam);
      setFilteredEvents(filteredEvents.filter(
        (event) => event.name.includes(searchParam.toLowerCase())
      ));
    }
  };
  const handleFilter = (filterName) => {
    setFilteredEvents(filterEvents(filterName, eventData));
    setFilter(filterName);
    handleSearch(search);
  };

  return (
    <div className="eventsList">
      <div className="options">
        <div className="filter">
          <div className="filterTitle">
            <FontAwesomeIcon icon={faFilter} size="3x" />
            <p>{'  '}</p>
            <h1>Filter</h1>
            <p>{'  '}</p>
            <FontAwesomeIcon icon={faChevronUp} size="3x" />
          </div>

          <div className="SearchBar">
            <input onChange={(value) => handleSearch(value.target.value)} value={search} />
          </div>
        </div>
        <div className="filters">
          <div className="filterColumn1">
            <button type="button" className="radioButton" onClick={() => { handleFilter('ALL'); }}>
              <div className="radioButtonContent">
                {filter !== 'ALL' ? <FontAwesomeIcon icon={faCircle} size="2x" />
                  : <FontAwesomeIcon icon={faDotCircle} size="2x" />}

                <p>ALL</p>
              </div>
            </button>
            <button type="button" className="radioButton" onClick={() => { handleFilter('REGISTERED'); }}>
              <div className="radioButtonContent">
                {filter !== 'REGISTERED' ? <FontAwesomeIcon icon={faCircle} size="2x" />
                  : <FontAwesomeIcon icon={faDotCircle} size="2x" />}

                <p>REGISTERED</p>
              </div>
            </button>
          </div>
          <div className="filterColumn2">

            <button type="button" className="radioButton" onClick={() => { handleFilter('BOOKMARKED'); }}>
              <div className="radioButtonContent">
                <p>BOOKMARKED</p>
                {filter !== 'BOOKMARKED' ? <FontAwesomeIcon icon={faCircle} size="2x" />
                  : <FontAwesomeIcon icon={faDotCircle} size="2x" />}

              </div>
            </button>
            <button type="button" className="radioButton" onClick={() => { handleFilter('SEATS AVAILABLE'); }}>
              <div className="radioButtonContent">
                <p>SEATS AVAILABLE</p>
                {filter !== 'SEATS AVAILABLE' ? <FontAwesomeIcon icon={faCircle} size="2x" />
                  : <FontAwesomeIcon icon={faDotCircle} size="2x" />}

              </div>
            </button>
          </div>

        </div>
      </div>
      <div className="events">

        {filteredEvents.map((event) => (
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
            registered={event.isRegistered}
          />
        ))}
      </div>

    </div>
  );
}

export default EventList;
