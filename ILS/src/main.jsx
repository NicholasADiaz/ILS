import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage.jsx'
import SignIn from './Sign In/SignIn.jsx'
import Branches from './Branches/Branches.jsx'
import Circulation from './Circulation/Circulation.jsx'
import Acquistions from './Acquisitions/Acquisitions.jsx'
import Cataloging from './Cataloging/Cataloging.jsx'
import Reports from './Reports/Reports.jsx'
import Search from './Search/Search.jsx'
import ProSearch from './Pro Search/ProSearch.jsx'
import Settings from './Settings/Settings.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path ="/" element={<SignIn />}></Route> {/* Reroutes "127.0.0.1:5173/" to the /login page */}
        <Route path ="/homepage" element={<Homepage />}></Route>
        <Route path ="/circulation" element={<Circulation/>}></Route>
        <Route path ="/acquisitions" element={<Acquistions/>}></Route>
        <Route path ="/branches" element={<Branches/>}></Route>
        <Route path ="/cataloging" element={<Cataloging/>}></Route>
        <Route path ="/reports" element={<Reports/>}></Route>
        <Route path ="/search" element={<Search/>}></Route>
        <Route path ="/pro-search" element={<ProSearch/>}></Route>
        <Route path ="/settings" element={<Settings/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
