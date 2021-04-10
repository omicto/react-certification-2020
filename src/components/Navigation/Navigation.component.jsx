import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBar } from 'components';
import { ToggleButton } from 'components/styled';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-family: monospace;
  font-size: 1rem;
  font-weight: 500;
  background: #181818;
  color: white;
  padding: 0 1rem;

  a {
    color: white;
  }
`;

const Navigation = () => {
  return (
    <NavBar>
      <Link to="/">WizeTube</Link>
      <SearchBar />
      <ToggleButton disabled>Dark mode</ToggleButton>
    </NavBar>
  );
};

export default Navigation;
