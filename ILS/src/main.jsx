<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import SignIn from './SignIn.jsx';
import Circulation from './Circulation/Circulation.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignIn from './SignIn.jsx'
import Circulation from './Circulation/Circulation.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
>>>>>>> 4fa5fc88e1b4c85744f4f9f22e06065f0b2ceb89

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<SignIn />} />
        <Route path="/homepage" element={<App />} />
        <Route path="/circulation" element={<Circulation />} />
        <Route path="/" element={<Navigate to="/login" />} />         {/* Reroutes "127.0.0.1:5173" to the /login page */}
=======
        <Route path ="/login" element={<SignIn />}></Route>
        <Route path ="/homepage" element={<App />}></Route>
        <Route path ="/circulation" element={<Circulation/>}></Route>
>>>>>>> 4fa5fc88e1b4c85744f4f9f22e06065f0b2ceb89
      </Routes>
    </Router>
  </React.StrictMode>,
);
