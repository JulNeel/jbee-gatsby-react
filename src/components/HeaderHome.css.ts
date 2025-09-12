import { style } from "@vanilla-extract/css";
import { breakpoints } from "../styles/breakpoints";
import { themeVars } from "../styles/themes/themeContract.css";

export const headerHomeStyle = style({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "gray",
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
});

export const headerHomeContentStyle = style({
  display: "flex",
  justifyContent: 'center',
  paddingBlock: themeVars.spaces[16],
  '@media': {
    [breakpoints.tablet]: {
      display: "flex",
      justifyContent: 'space-between',
      alignItems: 'end',
    },
  }
})

export const logoWrapperStyle = style({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1
})
export const logoStyle = style({
  maxWidth: "95vw",
});

export const menuWrapperStyle = style({
  width: "100%",
  boxShadow: "none",
  transition: "all .5s ease-out",
  background: "none",
})
export const stickedMenuWrapperStyle = style({
  position: "fixed",
  top: 0,
  background: themeVars.backgroundColor,
  boxShadow: "0 1px 5px grey",
  transition: "all .5s ease-out"
})

export const menuLogoStyle = style({
  display: "none",
  '@media': {
    [breakpoints.smallDesktop]: {
      maxWidth: 100,
      transition: "max-width 0.5s",
    },
  }
})

export const stickedMenuLogoStyle = style({

  '@media': {
    [breakpoints.smallDesktop]: {
      display: "block",
      maxWidth: 100,
      transition: "max-width 0.5s",
    },
  }
})


