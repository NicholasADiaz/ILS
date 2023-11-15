import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faClipboardList, faBuilding, faMagnifyingGlass, faSearchPlus, faBook, faPieChart, faUser, faGears } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Homepage.css'

function Homepage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
    <h1>Welcome {location.state.user.last_name.toUpperCase()}, {location.state.user.first_name.toUpperCase()}</h1>
    <div class="grid-wrapper">
      <div class="grid-container">
        <div class="grid-item">
           <Link to="/circulation">    {/* Link to Ciruclations Webpage */} 
            <FontAwesomeIcon icon={faArrowsRotate} />           {/* Icon for Circulations*/}
            <br /> Circulation                                  {/* Icon Text*/}
            </Link>                                             {/* Closing of Link to Webpage*/}
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faBook} />
            <Link to="/acquistions">
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
