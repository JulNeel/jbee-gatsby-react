import { createTheme } from '@vanilla-extract/css';
import { themeVars } from './themeContract.css'
import { globalVars } from './globalTheme.css';

export const lightTheme = createTheme(themeVars, {
  backgroundColor: globalVars.colors.white,
  textColors: {
    default: '#375969',
    secondary: 'gray',
    white: 'white',
    brand: '#744ed4',
    good: 'green',
    bad: 'red',
    linkHover: globalVars.colors.secondary
  },
  buttonColors: {
    primary: {
      background: globalVars.colors.primaryDark,
      text: 'white',
      hoverBackground: globalVars.colors.primary,
      hoverText: 'white'
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
      body: "Oswald",
      oswald: "Oswald",
      roboto: "Roboto",
    },
    fontSize: {
      small: "0.75rem",
      medium: "1rem",
      large: "1.25rem",
      xLarge: "1.50rem",
      xxLarge: "2rem",
      h6: '1rem',
      h5: '1.25rem',
      h4: '1.5rem',
      h3: '1.75rem',
      h2: '4rem',
      h1: '4rem',
      body: "1rem"
    },
    fontWeight: {
      regular: "400",
      bold: "700",
      body: "200",
    },
    lineHeight: {
      tight: "1",
      normal: "1.2",
      relaxed: "1.4",
    },
  },
});