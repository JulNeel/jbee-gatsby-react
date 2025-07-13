import { createTheme } from '@vanilla-extract/css';
import { themeVars } from './themeContract.css'
import { globalVars } from './globalTheme.css';

export const lightTheme = createTheme(themeVars, {
  backgroundColor: globalVars.colors.white,
  textColors: {
    default: '#375969',
    secondary: 'gray',
    white: globalVars.colors.white,
    brand: '#744ed4',
    good: 'green',
    bad: 'red',
    linkHover: globalVars.colors.secondary
  },
  buttonColors: {
    primary: {
      background: globalVars.colors.primaryDark,
      text: globalVars.colors.white,
      hoverBackground: globalVars.colors.primary,
      hoverText: globalVars.colors.white
    },
    secondary: {
      background: globalVars.colors.white,
      text: globalVars.colors.primaryDark,
      hoverBackground: globalVars.colors.primary,
      hoverText: globalVars.colors.white
    },
  },
  spaces: {
    auto: 'auto',
    '0': '0',
    '4': '4px',
    '8': '8px',
    '12': '12px',
    '16': '16px',
    '32': '32px',
    '64': '64px',
  },
  typography: {
    fontFamily: {
      headings: "Oswald",
      menu: "Oswald",
      body: "Roboto",
      paragraph: "Merriweather",
      oswald: "Oswald",
      roboto: "Roboto",
    },
    fontSize: {
      small: "1rem",
      medium: "1.5rem",
      large: "2rem",
      xLarge: "3rem",
      xxLarge: "4rem",
      h6: '1.1rem',
      h5: '1.25rem',
      h4: '1.5rem',
      h3: '1.75rem',
      h2: '2rem',
      h1: '2.5rem',
      paragraph: "1.2rem"
    },
    fontWeight: {
      regular: "400",
      bold: "700",
      body: "400",
      paragraph: "400",
    },
    lineHeight: {
      tight: "1",
      normal: "1.4",
      relaxed: "1.6",
      headings: "1.6"
    },
  },
});