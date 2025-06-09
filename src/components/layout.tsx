import { graphql, useStaticQuery } from "gatsby";
import { getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import Header from "./header";

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
              gatsbyImageData(width: 220, layout: FIXED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const siteTitle = data.wp?.generalSettings?.title ?? "Titre du site";
  const siteLogoData = data.wp?.siteLogo?.localFile?.childImageSharp
    ? getImage(data.wp.siteLogo.localFile as ImageDataLike)
    : null;
  const siteLogoAltText = data.wp?.siteLogo?.altText || "Site logo";

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header siteTitle={siteTitle} siteLogoData={siteLogoData} siteLogoAltText={siteLogoAltText}></Header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a> and{" "}
        <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  );
};

export default Layout;
