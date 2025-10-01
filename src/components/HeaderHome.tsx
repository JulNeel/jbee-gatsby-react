import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useRef } from "react";
import logo from "../../static/images/logo_jbee_blanc.svg";
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
                gatsbyImageData(placeholder: DOMINANT_COLOR)
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

  const headerImageData = data.wp?.siteHeaderImage?.localFile?.childImageSharp
    ? getImage(data.wp.siteHeaderImage.localFile as ImageDataLike)
    : null;

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
    <header data-jarallax data-speed="0.5" className={clsx(headerHomeStyle, "header jarallax")} role="banner">
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
        <img className={logoStyle} src={logo} alt="Julien Bruneel, développeur web"></img>
      </Box>

      <Box
        as="div"
        ref={menuRef}
        className={clsx(menuWrapperStyle, {
          [stickedMenuWrapperStyle]: isMenuAtInitialPosition,
        })}
      >
        <Box className={clsx(headerHomeContentStyle, "content")}>
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
  );
}
