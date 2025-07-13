import { style } from "@vanilla-extract/css";
import { globalVars } from "../styles/themes/globalTheme.css";
import { breakpoints } from "../styles/breakpoints";

export const postsListStyle = style({
  maxWidth: globalVars.contentMaxWidth.mobile,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",

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

export const thumbnailWrapperStyle = style({
  height: 300,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const thumbnailStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
})