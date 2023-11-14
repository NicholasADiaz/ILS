import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import SignIn from './SignIn.jsx';
import Circulation from './Circulation/Circulation.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/homepage" element={<App />} />
        <Route path="/circulation" element={<Circulation />} />
        <Route path="/" element={<Navigate to="/login" />} />         {/* Reroutes "127.0.0.1:5173" to the /login page */}
      </Routes>
    </Router>
  </React.StrictMode>,
);
