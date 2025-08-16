// src/styles/prism.css.ts
import { style, globalStyle } from "@vanilla-extract/css";

// Bouton "Copier"
export const copyButton = style({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  background: "#374151",
  color: "white",
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  cursor: "pointer",
  zIndex: 10,
  ":hover": {
    background: "#4b5563",
  },
});

// Styles globaux Prism (override du thème)
globalStyle("pre", {
  position: "relative",
  borderRadius: "0.5rem",
  overflow: "auto",
});

globalStyle("code[class*='language-']", {
  fontFamily: "Fira Code, monospace",
  fontSize: "0.9rem",
});
