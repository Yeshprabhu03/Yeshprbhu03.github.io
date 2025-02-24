import { Theme } from '../styles/theme';

export function validateTheme(theme: Theme): boolean {
  return Boolean(
    theme &&
    theme.colors &&
    Object.keys(theme.colors).length > 0 &&
    theme.shadows &&
    Object.keys(theme.shadows).length > 0 &&
    theme.transitions &&
    Object.keys(theme.transitions).length > 0 &&
    theme.borderRadius &&
    Object.keys(theme.borderRadius).length > 0 &&
    theme.breakpoints &&
    Object.keys(theme.breakpoints).length > 0
  );
}

type ThemeSection = keyof Theme;
type ThemeProperties = {
  [K in ThemeSection]: string[];
};

/**
 * Validate specific theme properties
 */
export function validateThemeProperties(theme: Theme): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check required properties
  const requiredProperties: ThemeProperties = {
    colors: ['primary', 'secondary', 'background', 'text'],
    shadows: ['small', 'medium', 'large'],
    transitions: ['default', 'fast', 'slow'],
    borderRadius: ['small', 'medium', 'large'],
    breakpoints: ['mobile', 'tablet', 'desktop']
  };

  Object.entries(requiredProperties).forEach(([key, properties]) => {
    const themeKey = key as ThemeSection;
    const themeSection = theme[themeKey];

    properties.forEach(prop => {
      if (!themeSection || !(prop in themeSection)) {
        errors.push(`Missing ${key}.${prop}`);
      }
    });
  });

  return {
    isValid: errors.length === 0,
    errors
  };
} 