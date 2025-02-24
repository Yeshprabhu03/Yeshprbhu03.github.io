import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1001;
`;

interface Props {
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<Props> = ({ toggleTheme }) => (
  <ToggleButton onClick={toggleTheme}>
    🌓
  </ToggleButton>
);

export default ThemeToggle; 