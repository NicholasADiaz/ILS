import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';

import './App.css'

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://127.0.0.1:5000/login", formData)
      .then((response) => {
        if (response.data != "User does not exist.") {
          console.log(response.data)
          navigate("/homepage", { state: { user: response.data } })
        }
        else {
          console.log("There was a problem.")
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
};

  return (
    <>
    <h1>Crescendo ILS</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="library">Library</label>
        <br />
        <input type='text' id="library" name="library" onChange={handleChange}></input>
        <br />
        <label htmlFor="user">Username</label>
        <br/>
        <input type='text' id="username" name="username" onChange={handleChange}></input>
        <br/>
        <label htmlFor="pass">Password</label>
        <br/>
        <input type='password' id="password" name="password" onChange={handleChange}></input>
        <br />
        <button type="submit">Login</button>
      </form>

    </>
  )
}

export default App
