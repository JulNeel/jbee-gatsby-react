import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import * as styles from "./HeaderHome.css";
import logo from "../assets/images/logo_jbee_dev_800_blanc.png";
import { Box } from "./Box";
import { contentStyle } from "./Layout.css";
import ResponsiveMenu from "./ResponsiveMenu";

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

  const headerImage = data.wp?.siteHeaderImage?.localFile?.url ?? "";
  const menuItems =
    data.wpMenu?.menuItems?.nodes
      .filter((item): item is { label: string; path: string } => !!item.label)
      .map((item) => ({
        label: item.label!,
        path: item.path ?? undefined,
      })) ?? [];

  return (
    <header
      data-jarallax
      data-speed="0.5"
      className={`${styles.header} header jarallax`}
      role="banner"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <a className={`${styles.logoWrapper} logoWrapper`} href="/">
        <img className={`${styles.logo} `} src={logo} alt="logo"></img>
      </a>
      <Box as="div" className={contentStyle}>
        <ResponsiveMenu menuItems={menuItems} context="home"></ResponsiveMenu>
      </Box>
    </header>
  );
}
