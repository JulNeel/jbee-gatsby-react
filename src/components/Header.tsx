import clsx from "clsx";
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";
import React, { useRef } from "react";
import { useIsScrolled } from "../hooks/useIsScrolled";
import { Box } from "./Box";
import {
  headerContentStyle,
  headerStyle,
  logoStyle,
  scrolledHeaderStyle,
  scrolledLogoStyle,
  HomeHeaderContentStyle,
  HomeHeaderStyle,
  logoWrapperStyle,
  menuLogoStyle,
  menuWrapperStyle,
  stickedMenuLogoStyle,
  stickedMenuWrapperStyle,
  HomeLogoStyle,
} from "./Header.css";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../static/images/logo_jbee_blanc.svg";

import { graphql, Link, useStaticQuery } from "gatsby";

import { useIsElementAtInitialPosition } from "../hooks/useIsElementAtInitialPosition";

interface HeaderProps {
  isHomePage?: boolean;
}
const Header: React.FC<HeaderProps> = ({ isHomePage = false }) => {
  const isScrolled = useIsScrolled();
  const data: Queries.HeaderMenuQuery = useStaticQuery(graphql`
    query HeaderMenu {
      wp {
        siteHeaderImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        siteLogo {
          altText
          fileSize
          srcSet
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
        menuItems {
          nodes {
            label
            path
          }
        }
      }
      wpUser(name: { eq: "Julien" }) {
        nicename
        seo {
          social {
            linkedIn
          }
        }
      }
    }
  `);
  const menuRef = useRef<HTMLDivElement>(null);
  const isMenuAtInitialPosition = useIsElementAtInitialPosition(menuRef);
  const headerImageData = data.wp?.siteHeaderImage?.localFile?.childImageSharp
    ? getImage(data.wp.siteHeaderImage.localFile as ImageDataLike)
    : null;
  const siteLogoData = data.wp?.siteLogo?.localFile?.childImageSharp
    ? getImage(data.wp.siteLogo.localFile as ImageDataLike)
    : null;
  const siteLogoAltText = data.wp?.siteLogo?.altText || "Site logo";
  const menuItems = [
    ...(data.wpMenu?.menuItems?.nodes
      .filter((item): item is { label: string; path: string } => !!item.label)
      .map((item) => ({
        label: item.label!,
        path: item.path ?? undefined,
      })) ?? []),
    ...(data.wpUser?.seo?.social?.linkedIn
      ? [{ label: "LinkedIn", path: data.wpUser.seo.social.linkedIn, isExternalLink: true }]
      : []),
  ];

  return isHomePage ? (
    <header data-jarallax data-speed="0.5" className={clsx(HomeHeaderStyle, "header jarallax")} role="banner">
      {headerImageData && (
        <GatsbyImage
          image={headerImageData}
          loading="eager"
          fetchPriority="high"
          alt=""
          className="jarallax-img"
          objectFit="cover"
          objectPosition="center"
        />
      )}

      <Box className={clsx("content", logoWrapperStyle)}>
        <img className={HomeLogoStyle} src={logo} alt="Julien Bruneel, développeur web"></img>
      </Box>

      <Box
        as="div"
        ref={menuRef}
        className={clsx(menuWrapperStyle, {
          [stickedMenuWrapperStyle]: isMenuAtInitialPosition,
        })}
      >
        <Box className={clsx(HomeHeaderContentStyle, "content")}>
          <Link
            to="/"
            className={clsx(menuLogoStyle, {
              [stickedMenuLogoStyle]: isMenuAtInitialPosition,
            })}
          >
            {siteLogoData ? <GatsbyImage image={siteLogoData} alt={siteLogoAltText} /> : <p>Logo non disponible</p>}
          </Link>

          <ResponsiveMenu
            menuItems={menuItems}
            theme={isMenuAtInitialPosition ? "whiteBackgroundMenu" : "transparentBackgroundMenu"}
          />
        </Box>
      </Box>
    </header>
  ) : (
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
