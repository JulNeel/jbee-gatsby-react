import { style } from "@vanilla-extract/css";
import { themeVars } from "../styles/themes/themeContract.css";
import { breakpoints } from "../styles/breakpoints";


export const headerStyle = style({
  paddingBlock: themeVars.spaces[16],
  top: 0,
  zIndex: 99,
  width: "100%",
  backgroundColor: themeVars.backgroundColor.site,
  boxShadow: "0 1px 5px grey",
})

export const headerContentStyle = style({
  display: "flex",
  justifyContent: 'center',
  '@media': {
    [breakpoints.tablet]: {
      display: "flex",
      justifyContent: 'space-between',
      alignItems: 'end',
    },
  }
})

export const scrolledHeaderStyle = style({
  '@media': {
    [breakpoints.tablet]: {
      top: 0,
      position: "sticky",

    },
  }
})

export const logoStyle = style({
  maxWidth: 220,
  transition: "max-width 0.5s",
  paddingBlock: themeVars.spaces[4],
  '@media': {
    [breakpoints.tablet]: {
    },
  }
})
export const scrolledLogoStyle = style({

  '@media': {
    [breakpoints.tablet]: {
      maxWidth: 100,
      transition: "max-width 0.5s",
    },
  }
})


export const HomeHeaderStyle = style({
  width: "100%",
  minHeight: "300px",
  backgroundColor: "gray",
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
  '@media': {
    [breakpoints.tablet]: {
      minHeight: "500px",
    },
  }
});

export const HomeHeaderContentStyle = style({
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

export const HomeLogoStyle = style({
  maxWidth: "95vw",
  width: "500px",
  height: "auto",
});

export const menuWrapperStyle = style({
  width: "100%",
  boxShadow: "none",
  transition: "all .5s ease-out",
  background: "none",
})
export const stickedMenuWrapperStyle = style({
  "@media": {
    [breakpoints.smallDesktop]: {
      position: "fixed",
      top: 0,
      background: themeVars.backgroundColor.site,
      boxShadow: "0 1px 5px grey",
      transition: "all .5s ease-out"
    }
  }
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






