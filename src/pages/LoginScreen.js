import React from "react";
import "./LoginScreen.css";
import logo from '../psytrack.png';


function LoginScreen({ setIamPatient }) {
    return (
        <div className="loginScreen">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Connectez-vous</h1>
            <button onClick={() => setIamPatient(true)}>Se connecter en tant que patient</button>
            <button onClick={() => setIamPatient(false)}>Se connecter en tant que psychiatre</button>
        </div>
    );
}

export default LoginScreen;
