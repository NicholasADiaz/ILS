import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignIn from './SignIn.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path ="/login" element={<SignIn />}></Route>
        <Route path ="/homepage" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
