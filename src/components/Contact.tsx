import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ResumeUpload from './ResumeUpload';

const ContactSection = styled.section`
  // ... existing styles ...
`;

const AdminButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const Contact = (): JSX.Element => {
  const [showUpload, setShowUpload] = useState(false);
  const [resumeURL, setResumeURL] = useState(localStorage.getItem('resumeURL') || 'YESHWANTH_DAYANANDA_RESUME.pdf');

  useEffect(() => {
    const handleStorageChange = () => {
      setResumeURL(localStorage.getItem('resumeURL') || 'YESHWANTH_DAYANANDA_RESUME.pdf');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <ContactSection id="contact">
      <h2>Contact</h2>
      <p>Let's connect and discuss how I can bring value to your team.</p>
      <a 
        href={resumeURL}
        download="Yeshwanth_Dayananda_Resume"
        className="download-link"
      >
        Download Resume
      </a>
      <AdminButton onClick={() => setShowUpload(!showUpload)}>
        {showUpload ? 'Hide Upload' : 'Admin Upload'}
      </AdminButton>
      {showUpload && <ResumeUpload />}
    </ContactSection>
  );
};

export default Contact; 