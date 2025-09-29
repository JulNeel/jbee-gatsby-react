import clsx from "clsx";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { useIsScrolled } from "../hooks/useIsScrolled";
import { Box } from "./Box";
import { headerContentStyle, headerStyle, logoStyle, scrolledHeaderStyle, scrolledLogoStyle } from "./Header.css";
import ResponsiveMenu from "./ResponsiveMenu";
import { graphql, Link, useStaticQuery } from "gatsby";
interface HeaderProps {
  siteLogoData: IGatsbyImageData | null | undefined;
  siteLogoAltText: string;
}
const Header: React.FC<HeaderProps> = ({ siteLogoData, siteLogoAltText }) => {
  const isScrolled = useIsScrolled();
  const data: Queries.HeaderMenuQuery = useStaticQuery(graphql`
    query HeaderMenu {
      wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
  `);

  const menuItems =
    data.wpMenu?.menuItems?.nodes
      .filter((item): item is { label: string; path: string } => !!item.label)
      .map((item) => ({
        label: item.label!,
        path: item.path ?? undefined,
      })) ?? [];

  return (
    <Box as="header" className={clsx(headerStyle, { [scrolledHeaderStyle]: isScrolled })}>
      <Box as="div" className={clsx("content", headerContentStyle)}>
        <Link to="/" className={clsx(logoStyle, { [scrolledLogoStyle]: isScrolled })}>
          {siteLogoData ? (
            <GatsbyImage image={siteLogoData} alt={siteLogoAltText} loading="eager" fetchPriority="high" />
          ) : (
            <p>Logo non disponible</p>
          )}
        </Link>
        <ResponsiveMenu theme="whiteBackgroundMenu" menuItems={menuItems} />
      </Box>
    </Box>
  );
};
export default Header;
