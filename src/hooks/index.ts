import { useEffect } from 'react';
import ReactGA from 'react-ga';

export const usePageAnalytics = (...deps: any[]) => {
  useEffect(() => {
    ReactGA.pageview(`${window.location.origin}/${window.location.pathname}`);
  }, [deps]);
};

export default {
  usePageAnalytics,
};
