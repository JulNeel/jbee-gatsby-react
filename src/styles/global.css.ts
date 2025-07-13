import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./themes/themeContract.css";
import { globalVars } from "./themes/globalTheme.css";
import { breakpoints } from "./breakpoints";

globalStyle('app', {
  fontFamily: themeVars.typography.fontFamily.body,
})
globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: themeVars.typography.fontFamily.headings,
  color: globalVars.colors.primaryDark,
  lineHeight: themeVars.typography.lineHeight.headings,
  fontWeight: themeVars.typography.fontWeight.bold
})
globalStyle('h1', {
  fontSize: themeVars.typography.fontSize.h1,
})
globalStyle('h2', {
  fontSize: themeVars.typography.fontSize.h2,
})
globalStyle('h3', {
  fontSize: themeVars.typography.fontSize.h3,
})
globalStyle('h4', {
  fontSize: themeVars.typography.fontSize.h4,
})
globalStyle('h5', {
  fontSize: themeVars.typography.fontSize.h5,
})
globalStyle('h6', {
  fontSize: themeVars.typography.fontSize.h6,
})

globalStyle('p', {
  fontFamily: themeVars.typography.fontFamily.paragraph,
  color: globalVars.colors.primaryText,
  fontSize: themeVars.typography.fontSize.paragraph,
  lineHeight: themeVars.typography.lineHeight.relaxed,
  fontWeight: themeVars.typography.fontWeight.paragraph
})
globalStyle('a', {
  color: globalVars.colors.primaryDark,
  textDecoration: "none",
})


globalStyle('.content', ({
  maxWidth: globalVars.contentMaxWidth.mobile,
  width: '100%',
  margin: "0 auto",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  boxSizing: "border-box",
  '@media': {
    [breakpoints.tablet]: {
      maxWidth: globalVars.contentMaxWidth.tablet,
    },
    [breakpoints.smallDesktop]: {
      maxWidth: globalVars.contentMaxWidth.smallDesktop,
    },
    [breakpoints.largeDesktop]: {
      maxWidth: globalVars.contentMaxWidth.largeDesktop,
    },
  }
}))