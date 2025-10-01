// Here, we dynamically create css rules based on the classes created by Wordpress Gutenberg
// and the colors and font sizes variables defined in globalTheme.css

import { globalStyle } from "@vanilla-extract/css";
import { globalVars } from "./themes/globalTheme.css";

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

globalStyle(":root", {
  vars: {
    "--wp--preset--aspect-ratio--square": "1",
    "--wp--preset--aspect-ratio--4-3": "4/3",
    "--wp--preset--aspect-ratio--3-4": "3/4",
    "--wp--preset--aspect-ratio--3-2": "3/2",
    "--wp--preset--aspect-ratio--2-3": "2/3",
    "--wp--preset--aspect-ratio--16-9": "16/9",
    "--wp--preset--aspect-ratio--9-16": "9/16",

    "--wp--preset--shadow--natural": "6px 6px 9px rgba(0, 0, 0, 0.2)",
    "--wp--preset--shadow--deep": "12px 12px 50px rgba(0, 0, 0, 0.4)",
    "--wp--preset--shadow--sharp": "6px 6px 0px rgba(0, 0, 0, 0.2)",
    "--wp--preset--shadow--outlined":
      "6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)",
    "--wp--preset--shadow--crisp": "6px 6px 0px rgba(0, 0, 0, 1)",
  },
});


globalStyle(":where(body)", {
  margin: 0,
});

globalStyle(".wp-site-blocks > .alignleft", {
  float: "left",
  marginRight: "2em",
});

globalStyle(".wp-site-blocks > .alignright", {
  float: "right",
  marginLeft: "2em",
});

globalStyle(".wp-site-blocks > .aligncenter", {
  justifyContent: "center",
  marginLeft: "auto",
  marginRight: "auto",
});

globalStyle(":where(.is-layout-flex)", {
  gap: "0.5em",
});

globalStyle(":where(.is-layout-grid)", {
  gap: "0.5em",
});

globalStyle(".is-layout-flow > .alignleft", {
  float: "left",
  marginInlineStart: 0,
  marginInlineEnd: "2em",
});

globalStyle(".is-layout-flow > .alignright", {
  float: "right",
  marginInlineStart: "2em",
  marginInlineEnd: 0,
});

globalStyle(".is-layout-flow > .aligncenter", {
  marginLeft: "auto !important",
  marginRight: "auto !important",
});

globalStyle(".is-layout-constrained > .alignleft", {
  float: "left",
  marginInlineStart: 0,
  marginInlineEnd: "2em",
});

globalStyle(".is-layout-constrained > .alignright", {
  float: "right",
  marginInlineStart: "2em",
  marginInlineEnd: 0,
});

globalStyle(".is-layout-constrained > .aligncenter", {
  marginLeft: "auto !important",
  marginRight: "auto !important",
});

globalStyle(
  ".is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull))",
  {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  }
);

globalStyle("body .is-layout-flex", {
  display: "flex",
});

globalStyle(".is-layout-flex", {
  flexWrap: "wrap",
  alignItems: "center",
});

globalStyle(".is-layout-flex > :is(*, div)", {
  margin: 0,
});

globalStyle("body .is-layout-grid", {
  display: "grid",
});

globalStyle(".is-layout-grid > :is(*, div)", {
  margin: 0,
});

globalStyle("body", {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
});




