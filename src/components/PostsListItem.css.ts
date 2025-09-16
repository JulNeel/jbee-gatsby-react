import { style } from "@vanilla-extract/css";
import { themeVars } from "../styles/themes/themeContract.css";


export const thumbnailWrapperStyle = style({
  height: 300,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

})

export const thumbnailStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  transition: "transform 0.3s ease", /* animation fluide */
  selectors: {
    [`a:hover &`]: {
      transform: "scale(1.2)",
    },
  },
})


export const PostExcerptStyle = style({
  selectors: {
    [`a:hover &`]: {
      color: themeVars.textColors.link,
    },
  },
});

