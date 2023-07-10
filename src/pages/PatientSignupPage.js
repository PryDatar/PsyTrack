import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./PatientSignupPage.css";


function PatientSignupPage({setIamPatient}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    axios.post('http://localhost:5000/auth/signup', { email, password, isDoctor: false })
      .then(response => {
        navigate('/');
        setIamPatient(true);
        //console.log(`Sent email: "${email}", Sent psw : "${password}"`);
      })
      .catch(error => {
        console.log("Oops Patient couldnt post")
        // Handle error
      });
  };

  return (
    <div className="patientSignupPage">
      <h1>Inscription en tant que patient</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>S'inscrire</button>
    </div>
  );
}

export default PatientSignupPage;
