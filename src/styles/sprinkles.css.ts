import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { themeVars } from './themes/themeContract.css';
import { globalVars } from './themes/globalTheme.css';
import { breakpoints } from './breakpoints';


export const colorProperties = defineProperties({
  properties: {
    backgroundColor: globalVars.wpColors,
    color: themeVars.textColors,
  },
});

const displayProperties = defineProperties({
  properties: {
    display: ['flex', 'block', 'inline', 'inline-block', 'grid', 'none'],

  },
});
const flexProperties = defineProperties({
  properties: {
    flexDirection: ['row', 'column'],
    flexWrap: ["wrap", "nowrap", "wrap-reverse"],
    justifyContent: ["start", "end", "center", "space-between", "space-around"],
    alignItems: ["start", "end", "center", "baseline", "stretch"],
  },
})
export const typoProperties = defineProperties({
  properties: {
    fontFamily: themeVars.typography.fontFamily,
    whiteSpace: ['nowrap'],
    color: themeVars.textColors,
    textDecorationLine: ['none', "underlined", "line-through"],
  },
});

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': breakpoints.tablet },
    smallDesktop: { '@media': breakpoints.smallDesktop },
    largeDesktop: { '@media': breakpoints.largeDesktop },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'smallDesktop', 'largeDesktop'] as const,
  properties: {
    fontSize: themeVars.typography.fontSize,
    maxWidth: globalVars.contentMaxWidth,
    margin: themeVars.spaces,
    marginTop: themeVars.spaces,
    marginRight: themeVars.spaces,
    marginBottom: themeVars.spaces,
    marginLeft: themeVars.spaces,
    padding: themeVars.spaces,
    paddingTop: themeVars.spaces,
    paddingRight: themeVars.spaces,
    paddingBottom: themeVars.spaces,
    paddingLeft: themeVars.spaces,
  },
  shorthands: {
    m: ['margin'],
    mx: ['marginLeft', 'marginRight'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"]
  },
});
export const sprinkles = createSprinkles(colorProperties, typoProperties, responsiveProperties, displayProperties, flexProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];

