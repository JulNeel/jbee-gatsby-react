import { globalStyle } from "@vanilla-extract/css";
import { globalVars } from "./themes/globalTheme.css";
import { themeVars } from "./themes/themeContract.css";
import { breakpoints } from "./breakpoints";
//import { componentsLayer } from "./layers.css";

globalStyle('.home, .layout', {
  fontFamily: themeVars.typography.fontFamily.body,
  color: themeVars.textColors.default,
  backgroundColor: themeVars.backgroundColor,
  fontSize: themeVars.typography.fontSize.medium

})
globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: themeVars.typography.fontFamily.heading,
  lineHeight: themeVars.typography.lineHeight.heading,
  fontWeight: themeVars.typography.fontWeight.bold,
  color: themeVars.textColors.heading
})
globalStyle('.wp-block-group :is(h1, h2, h3, h4, h5, h6)', {
  marginTop: 0
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

globalStyle('p, ul, ol, li', {
  fontFamily: themeVars.typography.fontFamily.paragraph,
  lineHeight: themeVars.typography.lineHeight.relaxed,
  fontWeight: themeVars.typography.fontWeight.paragraph
})
globalStyle('article ul li', {
  listStyle: 'disc',
})
globalStyle('article ul li li', {
  listStyle: 'circle',
})
globalStyle('article ol > li', {
  listStyle: 'decimal',
})
globalStyle('article ol li ol li', {
  listStyle: 'lower-alpha',
})
globalStyle('.wp-element-caption', {
  fontFamily: themeVars.typography.fontFamily.paragraph,

})
globalStyle('a', {
  color: themeVars.textColors.link,
  textDecoration: "none",
})

// Here, we dynamically create css rules based on the classes created by Wordpress Gutenberg
// and the colors and font sizes variables defined in globalTheme.css

Object.entries(globalVars.wpColors).forEach(([name, value]) => {
  globalStyle(`.has-${name}-color`, {
    color: value,
  });

  globalStyle(`.has-${name}-background-color`, {
    backgroundColor: value,
  });
});
Object.entries(globalVars.wpFontSizes).forEach(([name, value]) => {
  globalStyle(`.has-${name}-font-size`, {
    fontSize: value,
  });
});
// Object.entries(globalVars.colors).forEach(([name, value]) => {
//   globalStyle(`.has-${name}-color`, {
//     "@layer": {
//       [componentsLayer]: {
//         color: value,
//       },
//     },
//   });

//   globalStyle(`.has-${name}-background-color`, {
//     "@layer": {
//       [componentsLayer]: {
//         backgroundColor: value,
//       },
//     },
//   });
// });

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