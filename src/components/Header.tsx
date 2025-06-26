import clsx from "clsx";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useRef } from "react";
import { Box } from "./box";
import { headerContentStyle, headerStyle, logoStyle, scrolledHeaderStyle, scrolledLogoStyle } from "./Header.css";
import HeaderMenu from "./HeaderMenu";
import { contentStyle } from "./layout.css";
import { useIsScrolled } from "../hooks/useIsScrolled";
interface HeaderProps {
  siteLogoData: IGatsbyImageData | null | undefined;
  siteLogoAltText: string;
}
const Header: React.FC<HeaderProps> = ({ siteLogoData, siteLogoAltText }) => {
  const isScrolled = useIsScrolled();

  return (
    <Box as="header" className={clsx(headerStyle, { [scrolledHeaderStyle]: isScrolled })}>
      <Box as="div" className={clsx(contentStyle, headerContentStyle)}>
        <Box as="div" className={clsx(logoStyle, { [scrolledLogoStyle]: isScrolled })}>
          {siteLogoData ? <GatsbyImage image={siteLogoData} alt={siteLogoAltText} /> : <p>Logo non disponible</p>}
        </Box>
        <HeaderMenu />
      </Box>
    </Box>
  );
};
export default Header;
