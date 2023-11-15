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

import './Homepage.css'

function Homepage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
    <div class="grid-wrapper">
    <h1>
        Welcome 
        {location.state && location.state.user? `${location.state.user.last_name.toUpperCase()}, 
        ${location.state.user.first_name.toUpperCase()}`: 'Guest'}
    </h1>
      <div class="grid-container">
        <div class="grid-item">
           <Link to="./ILS/src/Circulation/Circulation.jsx">    {/* Link to Ciruclations Webpage */} 
            <FontAwesomeIcon icon={faArrowsRotate} />           {/* Icon for Circulations*/}
            <br /> Circulation                                  {/* Icon Text*/}
            </Link>                                             {/* Closing of Link to Webpage*/}
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faBook} />
            <Link to="./ILS/src/Aquisitions/Aquistions.jsx">
            <br /> Acquisitions
            </Link> 
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faUser} /> 
            <Link to="./ILS/src/Patrons/Patrons.jsx">
            <br /> Patrons 
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faClipboardList} />
            <Link to="./ILS/src/Cataloging/Cataloging.jsx">
            <br /> Cataloging
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faPieChart} />
            <Link to="./ILS/src/Reports/Reports.jsx">
            <br /> Reports
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faBuilding} />
            <Link to="./ILS/src/Branches/Branches.jsx">
            <br /> Branches
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Link to="./ILS/src/Search/Search.jsx">
            <br /> Search
            </Link>
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faSearchPlus} />
            <Link to="./ILS/src/Pro Search/ProSearch.jsx">
            <br /> Pro Search
            </Link>
        </div>
            <div class="grid-item"> 
            <FontAwesomeIcon icon={faGears} /> 
            <Link to="./ILS/src/Settings/Settings.jsx">
            <br /> Settings
        </Link>
        </div>
      </div>
    </div>

    </>
  )
}

export default Homepage
