import React from 'react';
import Components from '../../components/index';

function HomePage() {
  return (
    <div className="homePage">
      <Components.Header />
      <Components.EventList />
    </div>
  );
}

export default HomePage;
