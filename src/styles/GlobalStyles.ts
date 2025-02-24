import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.colors.primary};
    --text-color: ${({ theme }) => theme.colors.text};
    --background-color: ${({ theme }) => theme.colors.background};
    --secondary-color: ${({ theme }) => theme.colors.secondary};
    --border-color: ${({ theme }) => theme.colors.border};
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

  nav {
    position: fixed;
    width: 100%;
    background: var(--background-color);
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  nav a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }

  section {
    padding: 5rem 2rem;
    min-height: 50vh;
  }

  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: var(--secondary-color);
    padding-top: 80px;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .experience-item {
    margin-bottom: 3rem;
    padding: 2rem;
    background: var(--secondary-color);
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .company {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .duration {
    color: #666;
    font-style: italic;
    margin-bottom: 1rem;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .project-card {
    padding: 1.5rem;
    background: var(--secondary-color);
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .skill-category {
    padding: 1.5rem;
    background: var(--secondary-color);
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input, textarea {
    padding: 0.8rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  button {
    padding: 1rem 2rem;
    background: var(--primary-color);
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: darken(var(--primary-color), 10%);
    }
  }

  footer {
    text-align: center;
    padding: 2rem;
    background: var(--secondary-color);
  }

  @media (max-width: 768px) {
    nav ul {
      flex-direction: column;
      text-align: center;
    }
    
    .hero-content {
      text-align: center;
      padding: 0 1rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    section {
      padding: 3rem 1rem;
    }
  }
`;

export default GlobalStyles; 