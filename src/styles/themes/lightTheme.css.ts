import { createTheme } from '@vanilla-extract/css';
import { globalVars } from './globalTheme.css';
import { themeVars } from './themeContract.css'

export const lightTheme = createTheme(themeVars, {
  backgroundColor: globalVars.wpColors.white,
  textColors: {
    default: globalVars.wpColors.primarydark,
    heading: globalVars.wpColors.primarydark,
    link: globalVars.wpColors.primarydark,
    linkHover: globalVars.wpColors.secondarydark,
    secondary: globalVars.wpColors.secondarydark,
    success: globalVars.wpColors.success,
    danger: globalVars.wpColors.danger,
    warning: globalVars.wpColors.warning,
    white: globalVars.wpColors.white,
    black: globalVars.wpColors.black
  },
  buttonColors: {
    primary: {
      background: globalVars.wpColors.primarydark,
      text: globalVars.wpColors.white,
      hoverBackground: globalVars.wpColors.primary,
      hoverText: globalVars.wpColors.white
    },
    secondary: {
      background: globalVars.wpColors.white,
      text: globalVars.wpColors.primarydark,
      hoverBackground: globalVars.wpColors.primary,
      hoverText: globalVars.wpColors.white
    },
  },
  spaces: {
    auto: 'auto',
    '0': '0',
    '4': '4px',
    '8': '8px',
    '12': '12px',
    '16': '16px',
    '32': '32px',
    '64': '64px',
  },
  typography: {
    fontFamily: {
      heading: "Oswald",
      menu: "Oswald",
      body: "Oswald",
      paragraph: "Roboto",
      oswald: "Oswald",
      roboto: "Roboto",
    },
    fontSize: {
      small: globalVars.wpFontSizes.small,
      medium: globalVars.wpFontSizes.medium,
      large: globalVars.wpFontSizes.large,
      xLarge: globalVars.wpFontSizes['x-large'],
      xxLarge: "4rem",
      h6: '1.1rem',
      h5: '1.25rem',
      h4: '1.5rem',
      h3: '1.75rem',
      h2: '2rem',
      h1: '2.5rem',
      paragraph: "1.2rem"
    },
    fontWeight: {
      regular: "400",
      bold: "700",
      body: "400",
      paragraph: "400",
    },
    lineHeight: {
      tight: "1",
      normal: "1.4",
      relaxed: "1.6",
      heading: "1.6"
    },
  },
});