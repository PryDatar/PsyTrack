import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../psytrack.png'; 


const NavBar = ({ iamPatient }) => {
  return (

    <div className = "nav-container">
        <nav className="nav">
            <ul className={iamPatient ? "nav-links" : "nav-links-left"}>
                <li>
                <Link to={{ pathname: "/" }}>
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
                </li>
                {!iamPatient && (
                    <>
                    <li>
                    <Link to={{ pathname: "/healthcard" }}>Carnet de Santé</Link>
                    </li>
                    <li>
                    <Link to={{ pathname: "/profil" }}>Profil</Link>
                    </li>
                    </>
                    
                )}
                {iamPatient && (
                    <>
                        <li>
                        <Link to={{ pathname: "/search" }}>Recherche de Psychiatres</Link>
                        </li>
                        <li>
                        <Link to={{ pathname: "/appointments" }}>Prise de rendez-vous</Link>
                        </li>
                        <li>
                        <Link to={{ pathname: "/emotiontracker" }}>Suivi des émotions</Link>
                        </li>
                        <li>
                        <Link to={{ pathname: "/ressources" }}>Ressources</Link>
                        </li>
                        <li>
                        <Link to={{ pathname: "/medication" }}>Traitement</Link>
                        </li>
                        <li>
                        <Link to={{ pathname: "/patientprofil" }}>Profil</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    </div>
  );
}

export default NavBar;
