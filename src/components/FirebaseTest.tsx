import React, { useEffect, useState } from 'react';
import { storage, ref, listAll } from '../config/firebase';
import styled from 'styled-components';

const TestContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.colors.error}10;
`;

const FirebaseTest = () => {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [configErrors, setConfigErrors] = useState<string[]>([]);

  useEffect(() => {
    // Validate Firebase config
    const requiredKeys = [
      'REACT_APP_FIREBASE_API_KEY',
      'REACT_APP_FIREBASE_AUTH_DOMAIN',
      'REACT_APP_FIREBASE_PROJECT_ID',
      'REACT_APP_FIREBASE_STORAGE_BUCKET',
      'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
      'REACT_APP_FIREBASE_APP_ID',
      'REACT_APP_ADMIN_PASSWORD'
    ];

    const missingKeys = requiredKeys.filter(key => !process.env[key]);
    setConfigErrors(missingKeys);

    const testConnection = async () => {
      if (missingKeys.length > 0) {
        setStatus('error');
        return;
      }

      try {
        const storageRef = ref(storage, 'resumes');
        await listAll(storageRef);
        setStatus('connected');
      } catch (error) {
        console.error('Firebase connection error:', error);
        setStatus('error');
      }
    };

    testConnection();
  }, []);

  return (
    <TestContainer>
      <h3>Firebase Configuration Status:</h3>
      {configErrors.length > 0 && (
        <ErrorMessage>
          <strong>Missing environment variables:</strong>
          <ul>
            {configErrors.map(key => (
              <li key={key}>{key}</li>
            ))}
          </ul>
          <p>Please check your .env file and GitHub Secrets configuration.</p>
        </ErrorMessage>
      )}
      {status === 'loading' && <p>Testing connection...</p>}
      {status === 'connected' && <p>✅ Firebase is connected!</p>}
      {status === 'error' && !configErrors.length && (
        <p>❌ Firebase connection failed. Check console for details.</p>
      )}
      <pre>
        {`Environment Variables Status:
FIREBASE_API_KEY: ${process.env.REACT_APP_FIREBASE_API_KEY ? '✅' : '❌'}
FIREBASE_AUTH_DOMAIN: ${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ? '✅' : '❌'}
FIREBASE_PROJECT_ID: ${process.env.REACT_APP_FIREBASE_PROJECT_ID ? '✅' : '❌'}
FIREBASE_STORAGE_BUCKET: ${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ? '✅' : '❌'}
FIREBASE_MESSAGING_SENDER_ID: ${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ? '✅' : '❌'}
FIREBASE_APP_ID: ${process.env.REACT_APP_FIREBASE_APP_ID ? '✅' : '❌'}
ADMIN_PASSWORD: ${process.env.REACT_APP_ADMIN_PASSWORD ? '✅' : '❌'}`}
      </pre>
    </TestContainer>
  );
};

export default FirebaseTest; 