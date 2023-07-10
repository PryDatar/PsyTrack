import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./DoctorSignupPage.css";

function DoctorSignupPage({setIamPatient}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    axios.post('http://localhost:5000/auth/signup', { email, password, isDoctor: true })
      .then(response => {
        navigate('/');
        setIamPatient(false);
      })
      .catch(error => {
        console.log("Oops DoctorSignUp couldnt post")
        // Handle error
      });
  };

  return (
    <div className="doctorSignupPage">
      <h1>Inscription en tant que médecin</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>S'inscrire</button>
    </div>
  );
}

export default DoctorSignupPage;
