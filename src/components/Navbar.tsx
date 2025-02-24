import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.gradient};
  padding: 1rem 0;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.default};

  a {
    color: ${({ theme }) => theme.colors.background};
    margin: 0 1.5rem;
    text-decoration: none;
    font-weight: bold;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Navbar = (): JSX.Element => {
  return (
    <NavBar>
      <ul>
        <li><Link to="/#home">Home</Link></li>
        <li><Link to="/#about">About Me</Link></li>
        <li><Link to="/#experience">Experience</Link></li>
        <li><Link to="/#projects">Projects</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </NavBar>
  );
};

export default Navbar; 