import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1000;

  &.visible {
    opacity: 1;
  }
`;

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      className={isVisible ? 'visible' : ''}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </Button>
  );
};

export default BackToTop; 