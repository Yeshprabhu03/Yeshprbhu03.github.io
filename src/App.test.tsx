/// <reference types="@testing-library/jest-dom" />
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme } from './styles/theme';
import App from './App';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      {children}
    </ThemeProvider>
  </BrowserRouter>
);

test('renders portfolio sections', () => {
  render(<App />, { wrapper: TestWrapper });
  expect(screen.getByText(/Yeshwanth Dayananda/i)).toBeInTheDocument();
  expect(screen.getByText(/Product Manager/i)).toBeInTheDocument();
}); 