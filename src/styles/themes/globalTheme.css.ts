import { createGlobalTheme } from "@vanilla-extract/css";

export const globalVars = createGlobalTheme(":root", {

  colors: {
    primary: '#4d7c94',
    primaryDark: '#375969',
    primaryText: '#273e4a',
    secondary: '#ffc100',
    white: "white",
    good: 'lightgreen',
    bad: 'pink',
  },
  contentMaxWidth: {
    mobile: '800px',
    tablet: '800px',
    smallDesktop: '800px',
    largeDesktop: '1024px',
  },
})