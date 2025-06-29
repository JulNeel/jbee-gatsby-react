import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import * as styles from "./HeaderHome.css";
import logo from "../assets/images/logo_jbee_dev_800_blanc.png";
import HeaderMenu from "./HeaderMenu";
import { Box } from "./Box";
import { contentStyle } from "./Layout.css";

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

        allWpMenuItem(filter: { menu: { node: { name: { eq: "menu sections" } } } }) {
          nodes {
            id
            label
            url
          }
        }
      }
    `
  );

  const headerImage = data.wp?.siteHeaderImage?.localFile?.url ?? "";

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
        <HeaderMenu isHome={true}></HeaderMenu>
      </Box>
    </header>
  );
}
