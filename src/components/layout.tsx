import { graphql, useStaticQuery } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import "../styles/fonts/text.css";
import "../styles/reset.css";
import { lightTheme } from "../styles/themes/lightTheme.css";
import Header from "./Header";
import { contentStyle } from "./layout.css";

interface LayoutProps {
  isHomePage: boolean;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ isHomePage, children }) => {
  const data: Queries.LayoutQuery = useStaticQuery(graphql`
    query Layout {
      wp {
        generalSettings {
          title
          description
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
        siteFavicon {
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
    }
  `);
  const siteLogoData = data.wp?.siteLogo?.localFile?.childImageSharp
    ? getImage(data.wp.siteLogo.localFile as ImageDataLike)
    : null;

  const siteLogoAltText = data.wp?.siteLogo?.altText || "Site logo";

  return (
    <div className={`global-wrapper ${lightTheme}`} data-is-root-path={isHomePage}>
      <Header siteLogoData={siteLogoData} siteLogoAltText={siteLogoAltText}></Header>

      <main className={contentStyle}>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a> and{" "}
        <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  );
};

export default Layout;
