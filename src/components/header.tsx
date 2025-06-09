// Header.js
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

interface HeaderProps {
  siteTitle: string;
  siteLogoData: IGatsbyImageData | null | undefined;
  siteLogoAltText: string;
}
const Header: React.FC<HeaderProps> = ({ siteTitle, siteLogoData, siteLogoAltText }) => (
  <header>
    {siteLogoData ? (
      <GatsbyImage image={siteLogoData} alt={siteLogoAltText} style={{ backgroundColor: "white" }} />
    ) : (
      <p>Logo non disponible</p>
    )}
    <h1>{siteTitle}</h1>
  </header>
  /* <nav>
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav> */
);

export default Header;
