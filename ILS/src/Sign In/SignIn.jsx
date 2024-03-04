import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './SignIn.css'

function SignIn() {
  const navigate = useNavigate({
    username: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  
  
  const isEdge = navigator.userAgentData?.brands?.some((brand) => brand.brand === 'Microsoft Edge');
    //See if browser is Microsoft edge. Edge has a built in Password Visibility button, so we will remove ours.

  useEffect(() => {
    // Check the login status from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  
    console.log('Is Logged In:', isLoggedIn);

      // Redirect based on the login status
    navigate(isLoggedIn ? '/homepage' : '/login');
  }, []); 

  
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
  
          // Store login status and user information in localStorage
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(response.data));
          
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
            
            <label htmlFor="pass">Password1</label>
            <br />
            <input type={showPassword ? 'text' : 'password'}
              id="password"
              value={formData.password}
              name="password" placeholder="Password"
              onChange={handleChange}
              onFocus={() => setFormData({ ...formData, password: '' })} 
              className={inputHighlightClass}></input> 
           
          <br />
        {/* Display general error message */}
        {error && <div className="error-message">{error}</div>}

        <br />
        <button className='button_SignIn' type="submit">Login</button>
        
        <div id="remember-me"> {/* Remember Me button and Show Password button line */}
          <label>
            <input type="checkbox" onChange={handleCheckboxChange} id="rememberMe" /> Remember Me 
          </label>
          
          {!isEdge && (
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}/>Show Password
          </label>
          )}
        </div>
      
        <p><Link to="./ILS/src/Password Recovery/PasswordRecovery.jsx" className="link-style">Forgot Password?</Link></p>
      </form>
      </div>
    </>
  )
}

export default SignIn
