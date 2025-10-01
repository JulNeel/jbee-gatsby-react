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



