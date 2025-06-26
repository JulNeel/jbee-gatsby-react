import { globalStyle } from '@vanilla-extract/css';
import { baseLayer } from './layers.css';




// === RESET (inspired by normalize.css) ===

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
globalStyle('html', {
  "@layer": {
    [baseLayer]: {
      lineHeight: '1.15', // 1
      WebkitTextSizeAdjust: '100%', // 2
    }
  }
});

/**
 * Remove the default margin.
 */
globalStyle('body', {
  "@layer": {
    [baseLayer]: {
      margin: 0,
    }
  }
});

/**
 * Render the main HTML5 elements consistently.
 */
const html5Elements = [
  'article',
  'aside',
  'footer',
  'header',
  'nav',
  'section',
  'main',
  'figure',
  'figcaption',
  'details',
  'summary',
];
html5Elements.forEach((element) => {
  globalStyle(element, {
    "@layer": {
      [baseLayer]: {
        display: 'block',
      }
    }
  });
});

/**
 * Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed.
 */
globalStyle('ol, ul', {
  "@layer": {
    [baseLayer]: {
      listStyle: 'none',
    }
  }
});

/**
 * Set core root defaults.
 */
globalStyle('html', {
  "@layer": {
    [baseLayer]: {
      boxSizing: 'border-box',
    }
  }
});
globalStyle('*, *::before, *::after', {
  "@layer": {
    [baseLayer]: {
      boxSizing: 'inherit',
    }
  }
});

/**
 * Improve consistency of default fonts in all browsers.
 */
globalStyle('body', {
  "@layer": {
    [baseLayer]: {
      fontFamily: 'system-ui, sans-serif',
    }
  }
});


/**
 * Remove some button styles
 */
globalStyle('button', {
  "@layer": {
    [baseLayer]: {
      border: 'none',
    }
  }
});

/**
 * Correct the font size and margin on h1 elements within sections and articles in Chrome, Firefox, and Safari.
 */
globalStyle('h1', {
  "@layer": {
    [baseLayer]: {
      fontSize: '2em',
      margin: '0.67em 0',
    }
  }
});

/**
 * Add the correct display in IE 9-.
 */
globalStyle('summary', {
  "@layer": {
    [baseLayer]: {
      display: 'list-item',
    }
  }
});

/**
 * Add the correct display in all browsers.
 */
globalStyle('template', {
  "@layer": {
    [baseLayer]: {
      display: 'none',
    }
  }
});
