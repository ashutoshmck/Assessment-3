import React, { useContext, useEffect } from 'react';
import Components from '../../components/index';
import { GET_THEMES_URL } from '../../constants/apiEndpoints';
import ThemeContext from '../../contexts/ThemeContext';
import { getThemeColor } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';

function HomePage() {
  const { setThemes, setColor } = useContext(ThemeContext.ThemeContext);
  useEffect(() => {
    makeRequest(GET_THEMES_URL).then((response) => {
      setThemes(response);
      setColor(getThemeColor(response));
    });
  }, []);
  return (
    <div className="homePage">
      <Components.Header />
      <Components.EventList />
      <Components.Footer />
    </div>
  );
}

export default HomePage;
