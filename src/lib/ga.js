// lib/ga.js
import ReactGA from 'react-ga';

// Initialize Google Analytics
export const initGA = (trackingID) => {
  ReactGA.initialize(trackingID);
};

// Log a page view
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

// Log custom events
export const logEvent = (category = '', action = '', label = '') => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};

// Log custom exceptions
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
