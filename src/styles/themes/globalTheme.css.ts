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
    warning: '#ff8c42',
    danger: '#d64545',
    success: '#4caf50',
    white: '#f4f4f4',
    black: '#1a1a1a',
  },
  wpFontSizes: {
    small: "1rem",
    medium: "1.2rem",
    large: "2rem",
    "x-large": "3rem",
  },
  contentMaxWidth: {
    mobile: '800px',
    tablet: '800px',
    smallDesktop: '800px',
    largeDesktop: '1024px',
  },
})