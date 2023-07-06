import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo>PsyTrack</Logo>
      <NavLinks>
        <li>
          <NavLink href="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink href="/about">À propos</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </NavLinks>
      <SearchContainer>
        <SearchInput type="text" placeholder="Recherche" />
        <SearchButton>
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </SearchContainer>
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
  align-items: center;
  margin: 0;
  padding: 0;

  li {
    margin-left: 10px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    font-weight: bold;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 5px;
`;

const SearchButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #fff;
  color: #27004F;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export default NavBar;