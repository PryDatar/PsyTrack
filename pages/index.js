import React from 'react';
import NavBar from "./NavBar/NavBar";
import styled from 'styled-components';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomeContainer>
        <Content>
          <h1>PsyTrack</h1>
          <p>Bienvenue sur la page d'accueil !</p>
        </Content>
      </HomeContainer>
    </div>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0b5394;
`;

const Content = styled.div`
  text-align: center;
  color: #fff;
`;

export default HomePage;