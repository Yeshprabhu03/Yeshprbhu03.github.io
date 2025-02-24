import 'styled-components';

/**
 * Theme interface defining all theme properties
 */
export interface Theme {
  colors: NonNullable<{
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
    success: string;
    error: string;
    gradient: string;
  }>;
  shadows: {
    small: string;
    medium: string;
    large: string;
    hover: string;
  };
  transitions: {
    default: string;
    slow: string;
    fast: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    round: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

// Extend styled-components DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

/**
 * Light theme configuration
 */
export const lightTheme: Theme = {
  colors: {
    primary: '#0077ff' as string,
    secondary: '#00c3ff' as string,
    background: '#ffffff' as string,
    surface: '#f4f6f9' as string,
    text: '#2d3748' as string,
    textSecondary: '#4a5568' as string,
    accent: '#7928ca' as string,
    border: '#e2e8f0' as string,
    success: '#48bb78' as string,
    error: '#f56565' as string,
    gradient: 'linear-gradient(135deg, #0077ff, #00c3ff)' as string,
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)' as string,
    medium: '0 4px 6px rgba(0,0,0,0.1)' as string,
    large: '0 10px 15px rgba(0,0,0,0.1)' as string,
    hover: '0 10px 20px rgba(0,0,0,0.15)' as string,
  },
  transitions: {
    default: '0.3s ease' as string,
    slow: '0.5s ease' as string,
    fast: '0.2s ease' as string,
  },
  borderRadius: {
    small: '4px' as string,
    medium: '8px' as string,
    large: '16px' as string,
    round: '50%' as string,
  },
  breakpoints: {
    mobile: '768px' as string,
    tablet: '1024px' as string,
    desktop: '1280px' as string,
  },
};

/**
 * Dark theme configuration
 */
export const darkTheme: Theme = {
  colors: {
    primary: '#00c3ff' as string,
    secondary: '#0077ff' as string,
    background: '#1a202c' as string,
    surface: '#2d3748' as string,
    text: '#f7fafc' as string,
    textSecondary: '#e2e8f0' as string,
    accent: '#9f7aea' as string,
    border: '#4a5568' as string,
    success: '#48bb78' as string,
    error: '#f56565' as string,
    gradient: 'linear-gradient(135deg, #00c3ff, #0077ff)' as string,
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.3)' as string,
    medium: '0 4px 6px rgba(0,0,0,0.3)' as string,
    large: '0 10px 15px rgba(0,0,0,0.3)' as string,
    hover: '0 10px 20px rgba(0,0,0,0.4)' as string,
  },
  transitions: lightTheme.transitions,
  borderRadius: lightTheme.borderRadius,
  breakpoints: lightTheme.breakpoints,
}; 