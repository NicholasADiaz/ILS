import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook, faPieChart} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate, faChartPie, faClipboardList, faBuilding, faMagnifyingGlass, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';

import './Homepage.css'

function Homepage() {
    const location = useLocation();
    const navigate = useNavigate();
  
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;

  const handleSignout = () => {
    // Clear login status from localStorage
    localStorage.removeItem('isLoggedIn');
  
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <>    
    <div class="grid-wrapper">
    <h1>
    Welcome{' '}
          {user
            ? `${user.last_name.toUpperCase()}, ${user.first_name.toUpperCase()}`
            : 'Guest'}
    </h1>


      <div class="grid-container">
        <div class="grid-item">
          <FontAwesomeIcon icon={faArrowsRotate} />
           <Link to="/circulation">    
            <br /> Circulation                                 
            </Link>                                             
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faBook} />
            <Link to="/acquisitions">
            <br /> Acquisitions
            </Link> 
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faUser} /> 
            <Link to="/patrons">
            <br /> Patrons 
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faClipboardList} />
            <Link to="/cataloging">
            <br /> Cataloging
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faPieChart} />
            <Link to="/reports">
            <br /> Reports
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faBuilding} />
            <Link to="/branches">
            <br /> Branches
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Link to="/search">
            <br /> Search
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faSearchPlus} />
            <Link to="/pro-search">
            <br /> Pro Search
            </Link>
        </div>
            <div class="grid-item"> 
            <FontAwesomeIcon icon={faGears} /> 
            <Link to="/settings">
            <br /> Settings
        </Link>
        </div>
      </div>
    </div>

    </>
  )
}

export default Homepage
