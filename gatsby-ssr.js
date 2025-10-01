import React from "react";
import { lightTheme } from "./src/styles/themes/lightTheme.css";

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ className: lightTheme });
  setHeadComponents([
    // Préload Roboto
    <link
      rel="preload"
      href="/fonts/Roboto-VariableFont_wdth,wght.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      fetchpriority="high"
      key="preload-roboto"
    />,

    // Préload Oswald
    <link
      rel="preload"
      href="/fonts/Oswald-VariableFont_wght.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      fetchpriority="high"
      key="preload-oswald"
    />,
  ]);
};
