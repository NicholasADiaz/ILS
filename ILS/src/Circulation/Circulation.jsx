import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook, faPieChart} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp, faArrowDown, faRotate, faArrowsRotate  } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Circulation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
   <div class="grid-wrapper">
      <h1>Welcome </h1>
      <div class="grid-container">
        <div class="grid-item">
           <Link to="/circulation">
            <FontAwesomeIcon icon={faArrowUp} /> <br /> Check In 
            </Link> 
        </div>
        <div class="grid-item"> 
            <FontAwesomeIcon icon={faArrowDown} />
            <Link to="./ILS/src/Circulation/Aquistions.jsx">
            <br /> Check Out
            </Link> 
        </div>
        <div class="grid-item"> <FontAwesomeIcon icon={faArrowsRotate} /> <br /> Renew </div>
        <div class="grid-item"> <FontAwesomeIcon icon={faArrowDown} /><br /> Set Branch</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faArrowDown} /><br /> Renew</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faArrowDown} /><br /> Set Branch</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faArrowDown} /><br /> Fast Cataloging</div>
        <div class="grid-item"> <FontAwesomeIcon icon={faArrowDown} /><br /> Overdue </div>
        <div class="grid-item"> <FontAwesomeIcon icon={faArrowDown} /> <br /> Overdue w/ Fines</div>
      </div>
    </div>

    </>
  )
}

export default Circulation