import React from 'react';
import Components from '../../components/index';

function HomePage() {
  return (
    <div className="homePage">
      <Components.Header />
      <Components.EventList />
      <Components.Footer />
    </div>
  );
}

export default HomePage;
