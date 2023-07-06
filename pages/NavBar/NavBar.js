import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo>Psytrack</Logo>
      <NavLinks>
        <NavLink href="/">Accueil</NavLink>
        <NavLink href="/about">À propos</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </NavLinks>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  background-color: #27004F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #fff;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin-left: 10px;

  &:hover {
    font-weight: bold;
  }
`;

export default NavBar;