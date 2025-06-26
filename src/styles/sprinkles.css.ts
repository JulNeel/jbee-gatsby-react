import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { themeVars } from './themes/themeContract.css';
import { globalVars } from './themes/globalTheme.css';


export const colorProperties = defineProperties({
  properties: {
    backgroundColor: globalVars.colors,
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
    justifyContent: ["start", "end", "center", "space-between", "space-around"],
    alignItems: ["start", "end", "center", "baseline", "stretch"],
  }
})
export const typoProperties = defineProperties({
  properties: {
    fontFamily: themeVars.typography.fontFamily,
    whiteSpace: ['nowrap'],
    color: themeVars.textColors
  },
});

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 640px)' },
    smallDesktop: { '@media': 'screen and (min-width: 1024px)' },
    largeDesktop: { '@media': 'screen and (min-width: 1280px)' },
  },
  responsiveArray: ['mobile', 'tablet', 'largeDesktop', 'smallDesktop'],
  defaultCondition: 'mobile',
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

