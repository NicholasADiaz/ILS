import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation'; // Import your CSS file

const UserDropdown = ({ user, onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear login status from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="user-dropdown">
      <button className="dropbtn">User</button>
      <div className="dropdown-content">
        {user && (
          <p className="username">
            {user.last_name.toUpperCase()}, {user.first_name.toUpperCase()}
          </p>
        )}
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default UserDropdown;