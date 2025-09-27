import { createGlobalTheme } from "@vanilla-extract/css";

export const globalVars = createGlobalTheme(":root", {
  // wpColors and wpFontSizes are used in global.css to create css rules based on the class created by Wordpress Gutenberg.

  wpColors: {
    primarylight: '#7fa7bc',
    primary: '#4d7c94',
    primarydark: '#365768',

    secondarylight: '#ffda66',
    secondary: '#ffc100',
    secondarydark: '#b28700',

    warninglight: '#ffb46e',
    warning: '#ff8c42',
    warningdark: '#b25d2d',
    warningcontrast: '#663300',

    dangerlight: '#e57373',
    danger: '#d64545',
    dangerdark: '#8b2e2e',
    dangercontrast: '#660000',

    successlight: '#81c784',
    success: '#4caf50',
    successdark: '#357a38',
    successcontrast: '#0d3310',

    infolight: '#64b5f6',
    info: '#2196f3',
    infodark: '#0b79d0',
    infocontrast: '#002b5c',

    neutrallight: '#e0e0e0',
    neutral: '#9e9e9e',
    neutraldark: '#616161',

    offwhite: '#f4f4f4',
    purewhite: '#ffffff',

    offblack: '#1a1a1a',
    pureblack: '#000000',
  },

  wpFontSizes: {
    small: "1rem",
    medium: "1.2rem",
    large: "1.5rem",
    "x-large": "2rem",
  },
  contentMaxWidth: {
    small: '800px',
    large: '1024px',
  },
})