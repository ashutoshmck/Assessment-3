import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Components from '../../components';
import { GET_EVENT_URL } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './EventPage.css';

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  useEffect(() => {
    makeRequest(GET_EVENT_URL(id)).then((response) => {
      setEvent(response);
    });
  }, []);
  return (
    <div>
      <Components.Header />
      <div className="eventDetailsCardContainer">
        {event ? (
          <Components.EventCard
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
        )
          : <div><h1>Loading..</h1></div>}
      </div>

      <Components.Footer />
    </div>

  );
}

export default EventPage;
