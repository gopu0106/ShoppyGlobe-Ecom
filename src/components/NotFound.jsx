import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      {error && (
        <p className="error-details">
          <i>{error.statusText || error.message}</i>
        </p>
      )}
      <Link to="/" className="home-link">Return to Home</Link>
    </div>
  );
};

export default NotFound;
