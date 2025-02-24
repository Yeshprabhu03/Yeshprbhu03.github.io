export const lightTheme = {
  colors: {
    primary: '#0077ff',
    secondary: '#00c3ff',
    background: '#ffffff',
    surface: '#f4f6f9',
    text: '#2d3748',
    textSecondary: '#4a5568',
    accent: '#7928ca',
    border: '#e2e8f0',
    success: '#48bb78',
    error: '#f56565',
    gradient: 'linear-gradient(135deg, #0077ff, #00c3ff)',
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 6px rgba(0,0,0,0.1)',
    large: '0 10px 15px rgba(0,0,0,0.1)',
    hover: '0 10px 20px rgba(0,0,0,0.15)',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease',
    fast: '0.2s ease',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  }
};

export const darkTheme = {
  colors: {
    primary: '#00c3ff',
    secondary: '#0077ff',
    background: '#1a202c',
    surface: '#2d3748',
    text: '#f7fafc',
    textSecondary: '#e2e8f0',
    accent: '#9f7aea',
    border: '#4a5568',
    success: '#48bb78',
    error: '#f56565',
    gradient: 'linear-gradient(135deg, #00c3ff, #0077ff)',
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.3)',
    medium: '0 4px 6px rgba(0,0,0,0.3)',
    large: '0 10px 15px rgba(0,0,0,0.3)',
    hover: '0 10px 20px rgba(0,0,0,0.4)',
  },
  transitions: lightTheme.transitions,
  borderRadius: lightTheme.borderRadius,
};

export type Theme = typeof lightTheme; 