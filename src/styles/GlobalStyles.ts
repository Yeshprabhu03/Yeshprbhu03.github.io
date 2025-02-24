import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

interface GlobalStylesProps {
  theme: Theme;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    transition: all ${props => props.theme.transitions.default};
  }

  section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.text};
    line-height: 1.2;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.fast};

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${props => props.theme.transitions.default};
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes scaleIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  /* Utility Classes */
  .animate-fadeIn {
    animation: fadeIn 1s ease;
  }

  .animate-slideUp {
    animation: slideUp 1s ease;
  }

  .animate-scaleIn {
    animation: scaleIn 1s ease;
  }

  /* Responsive Design */
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    section {
      padding: 3rem 1rem;
    }

    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.75rem; }
  }
`;

export default GlobalStyles; 