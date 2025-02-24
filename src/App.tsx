import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { lightTheme, darkTheme, Theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FirebaseTest from './components/FirebaseTest';
import { validateTheme, validateThemeProperties } from './utils/themeValidation';

function App(): JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const currentTheme: Theme = isDarkTheme ? darkTheme : lightTheme;

  useEffect(() => {
    // Basic validation
    if (!validateTheme(currentTheme)) {
      console.error('Invalid theme structure');
      return;
    }

    // Detailed validation
    const { isValid, errors } = validateThemeProperties(currentTheme);
    if (!isValid) {
      console.error('Theme validation errors:', errors);
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles theme={currentTheme} />
      <Router>
        <ScrollProgress />
        <ThemeToggle toggleTheme={toggleTheme} />
        <BackToTop />
        <div className="App">
          <FirebaseTest />
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 