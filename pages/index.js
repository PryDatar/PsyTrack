import React from 'react';
// import Header from './Header';
import NavBar from "./NavBar/NavBar";
import styled from 'styled-components';


const HomePage = () => {
  return (
    <HomeContainer>
      <NavBar />
      <h1>PsyTrack</h1>
      <p>Bienvenue sur la page d'accueil !</p>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
background-color: #0b5394;
width: 100%;
height: 100%;
`
export default HomePage;