import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    // Check the login status from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  
    console.log('Is Logged In:', isLoggedIn);
      // Redirect based on the login status
    navigate(isLoggedIn ? '/homepage' : '/login');
  }, []); // Empty dependency array ensures this effect runs only once on mount

  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState(null);
  
  const inputHighlightClass = error ? 'input-highlight' : '';

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
    console.log(formData);
  };

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
   
    axios.post("http://127.0.0.1:5000/login", formData)
      .then((response) => {
        if (response.data !== "User does not exist.") {
          console.log(response.data);

          if (rememberMe) {
            // Store login status in localStorage
            localStorage.setItem('isLoggedIn', 'true');
          }

          // Navigate to the homepage
          navigate("/homepage", { state: { user: response.data } });
        } else {
          setError("Incorrect Username/Password entered. Please try again.");
        }
      })
      .catch((error) => {
        console.error("An error occurred", error);
        setError("An error occurred");
      });
  };
  
  return ( // HTML start
    <>
      <div className='background'>
        <div className='logo'>
          <h1>Crescendo</h1>
          <h3 className='subheading'>Integrated Library System</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="library">Library</label>
          <br />
          <input type='text' id="library" name="library" placeholder="e.g. Houston Branch" onChange={handleChange}></input>
          <br />
          
            <label htmlFor="user">Username</label>
            <br />
            <input type='text' id="username" name="username" placeholder="Username" 
            onChange={handleChange} 
            //Clears forms on focus
            value={formData.username} onFocus={() => setFormData({ ...formData, username: '' })} 
            className={inputHighlightClass}></input> {/* Apply the 'input-highlight' class (only when there's an error) */}
            <br />
            
            <label htmlFor="pass">Password</label>
            <br />
            <input type='password' id="password" name="password" placeholder="Password"
            onChange={handleChange} value={formData.password} 
            onFocus={() => setFormData({ ...formData, password: '' })} 
            className={inputHighlightClass}></input> 
           
          <br />
        {/* Display general error message */}
        {error && <div className="error-message">{error}</div>}

        <br />
        <button type="submit">Login</button>
        
        <div id="remember-me">
          <label>
              <input type="checkbox" onChange={handleCheckboxChange} id="rememberMe"/> Remember Me   
          </label>
          <label>
              <input type="checkbox" id="showPass"/> Show Password
          </label>
        </div>
      
        <p><Link to="./ILS/src/Password Recovery/PasswordRecovery.jsx" className="link-style">Forgot Password?</Link></p>


      </form>
      </div>
    </>
  )
}

export default App
