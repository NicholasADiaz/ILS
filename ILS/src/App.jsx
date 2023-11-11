import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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

    </>
  )
}

export default App
