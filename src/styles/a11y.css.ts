import { globalStyle } from '@vanilla-extract/css';
import { baseLayer } from './layers.css';

// Remove outline on elements not focus-visible
globalStyle(`${baseLayer}, *:focus:not(:focus-visible),
${baseLayer}, *::before:focus:not(:focus-visible),
${baseLayer}, *::after:focus:not(:focus-visible)`, {
  outline: 'none',
});

// Visually hidden utility
globalStyle(`${baseLayer}, .visually-hidden`, {
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  border: '0',
  padding: '0',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  margin: '-1px',
});

// Plain list fix (Safari)
globalStyle(`${baseLayer}, .plain-list`, {
  listStyle: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E\")",
  paddingLeft: '0',
});

// Reduced motion media query — fixed
globalStyle('@media (prefers-reduced-motion: reduce) { *, *::before, *::after }', {
  transition: 'none !important',
  animation: 'none !important',
  scrollBehavior: 'auto',
});
