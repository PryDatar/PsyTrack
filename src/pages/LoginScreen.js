import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LoginScreen.css";
import logo from '../psytrack.png';

function LoginScreen({ setIamPatient, setLoginScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // Add this line
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:5000/auth/login', { email, password })
      .then(response => {
        console.log(response.data);
        setIamPatient(!response.data.isDoctor);
        localStorage.setItem('token', response.data.token);
        setLoginScreen(false); // Set loginScreen to false
        navigate('/'); // Redirect to the home page
      })
      .catch(error => {
        // Handle error
        if (error.response && error.response.data.message) {
          setErrorMessage(error.response.data.message); // Set the error message
        }
      });
  };

  return (
    <div className="loginScreen">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Connectez-vous</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Se connecter</button>
      {errorMessage && <p>{errorMessage}</p>} {/* Display the error message if it exists */}
      <div className="signupButtons">
        <Link to="/signup/doctor"><button>S'inscrire en tant que médecin</button></Link>
        <Link to="/signup/patient"><button>S'inscrire en tant que patient</button></Link>
      </div>
    </div>
  );
}

export default LoginScreen;

