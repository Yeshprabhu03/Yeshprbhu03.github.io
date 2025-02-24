import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${props => props.theme.colors.primary};
  transform-origin: 0%;
  z-index: 1002;
`;

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <ProgressBar style={{ transform: `scaleX(${progress / 100})` }} />;
};

export default ScrollProgress; 