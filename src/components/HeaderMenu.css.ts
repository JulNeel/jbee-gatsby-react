import { CSSProperties, style } from "@vanilla-extract/css";
import { breakpoints } from "../styles/breakpoints";
import { globalVars } from "../styles/themes/globalTheme.css";
import { themeVars } from "../styles/themes/themeContract.css";


export const navMenu = style({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: themeVars.backgroundColor,
  overflow: "hidden",
  maxHeight: 0,
  transition: 'max-height .5s ease-out',
  zIndex: 3,
  display: "flex",
  alignItems: "center",
  // maxWidth: 639,
  // opacity: 0.9,
  "@media": {
    [breakpoints.smallDesktop]: {
      width: "unset",
      height: "unset",
      position: "relative",
      maxHeight: "unset",
    }
  }
})

export const navMenuOpened = style({
  maxHeight: '100%'
})
export const menuItemsStyle = style({
  marginTop: "auto",
  marginBottom: 0,
  paddingBottom: "5rem",
  width: "100%",
  paddingLeft: 0,

  "@media": {
    [breakpoints.smallDesktop]: {
      display: 'flex',
      paddingBottom: "unset"
    }
  }
});

export const menuLinkStyle = style({
  display: "block",
  textDecoration: "none",
  whiteSpace: "nowrap",
  width: '100%',
  padding: 16,
  ':hover': {
    backgroundColor: themeVars.buttonColors.primary.hoverBackground,
    color: themeVars.buttonColors.primary.hoverText
  },
  "@media": {
    [breakpoints.smallDesktop]: {
      padding: 8,
      ':hover': {
        backgroundColor: globalVars.colors.primaryDark,
        color: themeVars.textColors.linkHover,
      },
    }
  }

});


export const hamburgerButton = style({
  position: "fixed",
  bottom: 0,
  width: "100vw",
  zIndex: 4,
  height: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: themeVars.buttonColors.primary.background,
  left: 0,
  ':hover': {
    backgroundColor: themeVars.buttonColors.primary.hoverBackground
  },
  '@media': {
    [breakpoints.tablet]: {
      position: "relative",
      width: "auto",
      backgroundColor: globalVars.colors.white,
      marginLeft: "auto",
    },
    [breakpoints.smallDesktop]: {
      display: "none"
    }
  }
})

const hamburgerLineRules: CSSProperties = {
  backgroundColor: themeVars.buttonColors.primary.text,
  content: '',
  display: "block",
  height: "100%",
  position: "absolute",
  transition: "all .2s ease-out",
  width: "100%",

}
export const hamburgerLine = style({
  background: themeVars.buttonColors.primary.text,
  display: "block",
  height: 2,
  position: 'relative',
  width: 24,
  backgroundColor: globalVars.colors.white,
  '::before': {
    ...hamburgerLineRules,
    top: 8
  },
  '::after': {
    ...hamburgerLineRules,
    top: -8
  },
  '@media': {
    [breakpoints.tablet]: {
      backgroundColor: themeVars.textColors.default,
      '::before': {
        backgroundColor: themeVars.textColors.default,
      },
      '::after': {
        backgroundColor: themeVars.textColors.default,
      },
    },
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
