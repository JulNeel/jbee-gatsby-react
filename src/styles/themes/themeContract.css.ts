import { createThemeContract } from '@vanilla-extract/css';

export const themeVars = createThemeContract({

  backgroundColor: null,
  textColors: {
    default: null,
    secondary: null,
    white: null,
    brand: null,
    good: null,
    bad: null,
    linkHover: null,
  },
  buttonColors: {
    primary: {
      background: null,
      text: null,
      hoverBackground: null,
      hoverText: null,
    },
    secondary: {
      background: null,
      text: null,
      hoverBackground: null,
      hoverText: null,
    },
  },
  spaces: {
    auto: null,
    '0': null,
    '4': null,
    '8': null,
    '12': null,
    '16': null,
    '32': null,
    '64': null,
  },
  typography: {
    fontFamily: {
      headings: null,
      menu: null,
      body: null,
      paragraph: null,
      oswald: null,
      roboto: null,
    },
    fontSize: {
      small: null,
      medium: null,
      large: null,
      xLarge: null,
      xxLarge: null,
      h6: null,
      h5: null,
      h4: null,
      h3: null,
      h2: null,
      h1: null,
      paragraph: null
    },

    fontWeight: {
      regular: null,
      bold: null,
      body: null,
      paragraph: null,
    },
    lineHeight: {
      tight: null,
      normal: null,
      relaxed: null,
      headings: null,
    },
  },
});