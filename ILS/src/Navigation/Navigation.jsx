import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import './Navigation.css'; 

const Navigation = ({ onSignOut }) => {
  const location = useLocation();

  // Define an array of routes where you want to show the navigation bar
  const allowedRoutes = ['/homepage', '/circulation', '/acquisitions', '/branches', '/cataloging', '/reports', '/search', '/pro-search', '/settings'];

  // Check if the current route is in the allowedRoutes array
  const shouldRenderNavigation = allowedRoutes.includes(location.pathname);

  return (
    shouldRenderNavigation && (
      <div className="navigation">
        {/* Add your navigation buttons here */}
        <Link to="/homepage">Homepage</Link>
        <UserDropdown onSignOut={onSignOut} />
      </div>
    )
  );
};

export default Navigation;
