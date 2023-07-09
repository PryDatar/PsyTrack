import React, { useState } from "react";
import axios from 'axios';
import "./DoctorSignupPage.css";

function DoctorSignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios.post('/auth/signup', { email, password, isDoctor: true })
      .then(response => {
        // Redirect to the home page
      })
      .catch(error => {
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
