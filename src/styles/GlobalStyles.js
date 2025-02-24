import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #F6BF1B;
    --text-color: #333;
    --background-color: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
  }

  section {
    padding: 5rem 2rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  // Add all your existing CSS styles here
`;

export default GlobalStyles; 