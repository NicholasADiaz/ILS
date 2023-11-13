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

import './App.css'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
    <div class="grid-wrapper">
      <h1>Welcome {location.state.user.last_name.toUpperCase()}, {location.state.user.first_name.toUpperCase()}</h1>
      <div class="grid-container">
        <div class="grid-item"> <FontAwesomeIcon icon={faArrowsRotate} /> <br /> Circulation</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faBook} /> <br /> Acquisitions </div>
        <div class="grid-item"> <FontAwesomeIcon icon={faUser} /> <br /> Patrons </div>
        <div class="grid-item"> <FontAwesomeIcon icon={faClipboardList} /><br /> Cataloging</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faPieChart} /><br /> Reports</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faBuilding} /><br /> Branches</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faMagnifyingGlass} /><br /> Search</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faSearchPlus} /><br /> Pro Search</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faGears} /> <br /> Settings</div>
      </div>
    </div>

    </>
  )
}

export default App
