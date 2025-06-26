import { createGlobalTheme } from "@vanilla-extract/css";

export const globalVars = createGlobalTheme(":root", {

  colors: {
    primary: '#4d7c94',
    primaryDark: '#375969',
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
  }
})

/* @font-face {
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(./Oswald-VariableFont_wght.ttf);
}
@font-face {
  font-family: "Pacifico";
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(./Pacifico-Regular.ttf);
}
body {
  margin: 0;
  font-family: "Oswald";
} */