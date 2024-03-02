import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';

const UserDropdown = ({ user, onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear login status from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="user-dropdown">
      <button className="dropbtn">User</button>
      <div className="dropdown-content">
        {user && (
          <i className="username">
            {user.last_name.toUpperCase()}, {user.first_name.toUpperCase()}
          </i>
        )}
        <button onClick={handleSignOut}>Sign Out</button>
        <button onClick={handleSignOut}>Sign Out 2</button>
        <button onClick={handleSignOut}>Sign Out 3</button>
      </div>
    </div>
  );
};

const Navigation = ({ onSignOut }) => {
  const location = useLocation();

  // Define an array of routes where you want to show the navigation bar
  const allowedRoutes = ['/homepage', '/circulation', '/acquisitions', '/branches', '/cataloging', '/reports', '/search', '/pro-search', '/settings'];

  // Check if the current route is in the allowedRoutes array
  const shouldRenderNavigation = allowedRoutes.includes(location.pathname);

  return (
    shouldRenderNavigation && (
      <div className="navigation">
        {/* navigation buttons here */}
        <Link to="/homepage">Homepage</Link>
        <UserDropdown onSignOut={onSignOut} />
      </div>
    )
  );
};

export default Navigation;
