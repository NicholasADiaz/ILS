import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignIn from './SignIn.jsx'
import Circulation from './Circulation/Circulation.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path ="/login" element={<SignIn />}></Route>
        <Route path ="/homepage" element={<App />}></Route>
        <Route path ="/circulation" element={<Circulation/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
