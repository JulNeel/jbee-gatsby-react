import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useRef } from "react";
import logo from "../../static/images/logo_jbee_dev_800_blanc.png";
import { Box } from "./Box";
import ResponsiveMenu from "./ResponsiveMenu";
import { useIsElementAtInitialPosition } from "../hooks/useIsElementAtInitialPosition";
import { clsx } from "clsx";
import {
  headerHomeContentStyle,
  headerHomeStyle,
  logoStyle,
  logoWrapperStyle,
  menuLogoStyle,
  menuWrapperStyle,
  stickedMenuLogoStyle,
  stickedMenuWrapperStyle,
} from "./HeaderHome.css";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

export default function Header(): JSX.Element {
  const data: Queries.HeaderHomeQuery = useStaticQuery(
    graphql`
      query HeaderHome {
        wp {
          siteHeaderImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
              url
            }
          }
          siteLogo {
            altText
            fileSize
            srcSet
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: NONE)
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
      }
    `
  );
  const menuRef = useRef<HTMLDivElement>(null);
  const isMenuAtInitialPosition = useIsElementAtInitialPosition(menuRef);
  const headerImage = data.wp?.siteHeaderImage?.localFile?.url ?? "";
  const menuItems =
    data.wpMenu?.menuItems?.nodes
      .filter((item): item is { label: string; path: string } => !!item.label)
      .map((item) => ({
        label: item.label!,
        path: item.path ?? undefined,
      })) ?? [];
  const siteLogoData = data.wp?.siteLogo?.localFile?.childImageSharp
    ? getImage(data.wp.siteLogo.localFile as ImageDataLike)
    : null;
  const siteLogoAltText = data.wp?.siteLogo?.altText || "Site logo";

  return (
    <header
      data-jarallax
      data-speed="0.5"
      className={clsx(headerHomeStyle, "header jarallax")}
      role="banner"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <a className={clsx("content", logoWrapperStyle)} href="/">
        <img className={logoStyle} src={logo} alt="logo"></img>
      </a>
      <Box
        as="div"
        ref={menuRef}
        className={clsx(menuWrapperStyle, { [stickedMenuWrapperStyle]: isMenuAtInitialPosition })}
      >
        <Box className={clsx(headerHomeContentStyle, "content")}>
          <Link to="/" className={clsx(menuLogoStyle, { [stickedMenuLogoStyle]: isMenuAtInitialPosition })}>
            {siteLogoData ? <GatsbyImage image={siteLogoData} alt={siteLogoAltText} /> : <p>Logo non disponible</p>}
          </Link>
          <ResponsiveMenu
            menuItems={menuItems}
            theme={isMenuAtInitialPosition ? "whiteBackgroundMenu" : "transparentBackgroundMenu"}
          ></ResponsiveMenu>
        </Box>
      </Box>
    </header>
  );
}
