import React, { useState } from 'react';
import styled from 'styled-components';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';

const UploadSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;

  input {
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  button {
    padding: 0.75rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const Message = styled.div<{ type: 'success' | 'error' }>`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme, type }) => 
    type === 'success' ? theme.colors.success : theme.colors.error};
  color: white;
`;

const ResumeUpload: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your secure authentication method
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsAdmin(true);
      setMessage({ text: 'Admin access granted', type: 'success' });
    } else {
      setMessage({ text: 'Invalid password', type: 'error' });
    }
    setPassword('');
  };

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    try {
      // Create a storage reference
      const storageRef = ref(storage, `resumes/YESHWANTH_DAYANANDA_RESUME.pdf`);
      
      // Upload file
      await uploadBytes(storageRef, file);
      
      // Get download URL
      const downloadURL = await getDownloadURL(storageRef);
      
      // Update resume link in your app
      localStorage.setItem('resumeURL', downloadURL);
      
      setMessage({ text: 'Resume uploaded successfully', type: 'success' });
      setFile(null);
    } catch (error) {
      console.error('Upload error:', error);
      setMessage({ text: 'Failed to upload resume', type: 'error' });
    }
    setIsUploading(false);
  };

  if (!isAdmin) {
    return (
      <UploadSection>
        <AdminForm onSubmit={handleAdminLogin}>
          <h3>Admin Access</h3>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </AdminForm>
        {message && <Message type={message.type}>{message.text}</Message>}
      </UploadSection>
    );
  }

  return (
    <UploadSection>
      <AdminForm onSubmit={handleFileUpload}>
        <h3>Upload New Resume</h3>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button type="submit" disabled={!file || isUploading}>
          {isUploading ? 'Uploading...' : 'Upload Resume'}
        </button>
      </AdminForm>
      {message && <Message type={message.type}>{message.text}</Message>}
    </UploadSection>
  );
};

export default ResumeUpload; 