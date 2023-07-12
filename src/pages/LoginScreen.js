import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LoginScreen.css";
import logo from '../psytrack.png';

function LoginScreen({ setIamPatient, setLoginScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      setIamPatient(!response.data.isDoctor);
      sessionStorage.setItem('token', response.data.token);
      console.log("token :")
      console.log(response.data.token)
      setLoginScreen(false);
      navigate('/'); // Redirect to the home page
    } catch (error) {
      // Handle error
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Une erreur est survenue, veuillez réessayer.');
      }
    }
  };

  return (
    <div className="loginScreen">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Connectez-vous</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Se connecter</button>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <div className="signupButtons">
        <Link to="/signup/doctor"><button>S'inscrire en tant que médecin</button></Link>
        <Link to="/signup/patient"><button>S'inscrire en tant que patient</button></Link>
      </div>
    </div>
  );
}

export default LoginScreen;


