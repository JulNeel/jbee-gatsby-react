import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./themes/themeContract.css";


globalStyle('.table-of-contents', {
  paddingTop: themeVars.spaces[64],
})

globalStyle('.table-of-contents li', {
  fontFamily: themeVars.typography.fontFamily.heading,
  lineHeight: themeVars.typography.lineHeight.heading,
  fontWeight: themeVars.typography.fontWeight.paragraph,
})
globalStyle('.table-of-contents a', {
  textDecoration: "none"
})