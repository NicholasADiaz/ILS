import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import './App.css'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
    <div class="grid-wrapper">
      <h1>Welcome to ILS {location.state.user.last_name.toUpperCase()}, {location.state.user.first_name.toUpperCase()}</h1>
      <div class="grid-container">
        <div class="grid-item"> <FontAwesomeIcon icon={faUser} /> <br /> Patrons</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faBook} /> <br /> Acquisitions </div>
        <div class="grid-item">3 </div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faGears} /> <br /> Settings</div>
      </div>
    </div>

    </>
  )
}

export default App
