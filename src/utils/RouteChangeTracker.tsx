import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS) {
      ReactGA.initialize(import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send('pageview');
    }
  }, [initialized, location]);
};

export default RouteChangeTracker;
