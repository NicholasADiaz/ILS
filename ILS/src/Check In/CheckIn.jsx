import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook, faPieChart, faBuilding, faBaby, faClock, faClockRotateLeft, faArrowRightArrowLeft, faTableList} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp, faArrowDown, faRotate, faArrowsRotate  } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CheckIn() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
   <div class="grid-wrapper">
      <h1>Check In</h1>
      <input placeholder='Enter item barcode...'></input>
      <button>Check In</button>
    </div>

    </>
  )
}

export default CheckIn