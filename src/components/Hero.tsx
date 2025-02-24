import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    animation: fadeInUp 1s ease 0.2s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CTAButton = styled.a`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  font-weight: bold;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const Hero = (): JSX.Element => {
  return (
    <HeroSection id="home">
      <div>
        <h1>Yeshwanth Dayananda</h1>
        <p>Product Manager & Full Stack Developer</p>
        <CTAButton href="#contact">Get In Touch</CTAButton>
      </div>
    </HeroSection>
  );
};

export default Hero; 