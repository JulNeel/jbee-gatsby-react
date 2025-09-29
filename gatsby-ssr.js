import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
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
