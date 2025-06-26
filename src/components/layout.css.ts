import { style } from "@vanilla-extract/css";
import { globalVars } from "../styles/themes/globalTheme.css";
import { breakpoints } from "../styles/breakpoints";

export const contentStyle = style({
  maxWidth: globalVars.contentMaxWidth.mobile,
  width: '100%',
  margin: "0 auto",
  padding: "0 1rem",
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
})