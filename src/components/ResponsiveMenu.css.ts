import { CSSProperties, style, createTheme } from "@vanilla-extract/css";
import { breakpoints } from "../styles/breakpoints";
import { globalVars } from "../styles/themes/globalTheme.css";
import { themeVars } from "../styles/themes/themeContract.css";

export const [whiteBackgroundMenu, localThemeVars] = createTheme({
  background: themeVars.backgroundColor,
  text: themeVars.textColors.default,
  hoverBackground: globalVars.wpColors.primary,
  hoverText: themeVars.textColors.white,
})
export const transparentBackgroundMenu = createTheme(localThemeVars, {
  background: 'none',
  text: themeVars.textColors.white,
  hoverBackground: themeVars.textColors.white,
  hoverText: themeVars.textColors.default,

})

export const navMenuStyle = style({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  overflow: "hidden",
  maxHeight: 0,
  transition: 'max-height .5s ease-out, background 0s .5s ease-out',
  zIndex: 4,
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  background: localThemeVars.background,
  marginBlockEnd: 0,
  "@media": {
    [breakpoints.smallDesktop]: {
      width: "unset",
      height: "unset",
      position: "relative",
      maxHeight: "unset",
      transition: "none",
      background: "none",
    }
  }
})



export const navMenuOpened = style({
  transition: 'max-height .5s ease-out, background 0s 0s ease-out',
  maxHeight: '100%',
  background: themeVars.backgroundColor,

})
export const menuItemStyle = style({
  listStyle: "none",
})
export const menuItemsStyle = style({
  marginTop: "auto",
  paddingBottom: "5rem",
  paddingLeft: 0,
  marginLeft: "auto",
  marginRight: "1rem",

  "@media": {
    [breakpoints.smallDesktop]: {
      display: 'flex',
      paddingBottom: "initial",
      marginRight: 'unset',
    }
  }
});

export const menuLinkStyle = style({
  display: "block",
  textDecoration: "none",
  whiteSpace: "nowrap",
  width: '100%',
  padding: 16,
  fontFamily: 'Oswald',
  color: themeVars.textColors.default,
  ':hover': {
    backgroundColor: localThemeVars.hoverBackground,
    color: localThemeVars.hoverText
  },
  "@media": {
    [breakpoints.smallDesktop]: {
      padding: 8,
      color: localThemeVars.text,
      ':hover': {
        backgroundColor: localThemeVars.hoverBackground,
        color: localThemeVars.hoverText
      },
    }
  }

});

export const hamburgerButton = style({
  position: "fixed",
  bottom: 0,
  width: "100vw",
  height: "4rem",
  zIndex: 9,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: themeVars.buttonColors.secondary.background,
  left: 0,
  boxShadow: "0 -1px 5px grey",
  ':hover': {
    backgroundColor: themeVars.buttonColors.secondary.hoverBackground,
    color: themeVars.buttonColors.secondary.hoverText
  },
  '@media': {
    [breakpoints.tablet]: {
      position: "relative",
      width: "4rem",
      backgroundColor: globalVars.wpColors.white,
      marginLeft: "auto",
      boxShadow: "none",
      ':hover': {
        backgroundColor: themeVars.buttonColors.primary.hoverBackground,
      },
    },
    [breakpoints.smallDesktop]: {
      display: "none"
    }
  }
})

const hamburgerLineRules: CSSProperties = {
  backgroundColor: themeVars.buttonColors.secondary.text,
  content: '',
  display: "block",
  height: "100%",
  position: "absolute",
  transition: "all .2s ease-out",
  width: "100%",

}
export const hamburgerLine = style({
  background: themeVars.buttonColors.secondary.text,
  display: "block",
  height: 2,
  position: 'relative',
  width: 24,
  '::before': {
    ...hamburgerLineRules,
    top: 8
  },
  '::after': {
    ...hamburgerLineRules,
    top: -8
  }
})

export const hamburgerLineOpened = style({
  backgroundColor: 'transparent !important',
  '::before': {
    transform: 'rotate(-45deg)',
    top: '0',

  },
  '::after': {
    transform: 'rotate(45deg)',
    top: '0',
  },
})

export const noScroll = style({
  overflow: 'hidden',
});
