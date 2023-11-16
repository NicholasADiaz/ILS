import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation.jsx';
import Homepage from './Homepage.jsx';
import SignIn from './Sign In/SignIn.jsx';
import Branches from './Branches/Branches.jsx';
import Circulation from './Circulation/Circulation.jsx';
import Acquistions from './Acquisitions/Acquisitions.jsx';
import Cataloging from './Cataloging/Cataloging.jsx';
import Reports from './Reports/Reports.jsx';
import Search from './Search/Search.jsx';
import ProSearch from './Pro Search/ProSearch.jsx';
import Settings from './Settings/Settings.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/circulation" element={<Circulation />} />
        <Route path="/acquisitions" element={<Acquistions />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/cataloging" element={<Cataloging />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pro-search" element={<ProSearch />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);