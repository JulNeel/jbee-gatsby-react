import { graphql, useStaticQuery } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import Header from "./Header";
import clsx from "clsx";
import { Box } from "./Box";
import { layoutStyle, mainStyle } from "./layout.css";
import Footer from "./Footer";

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
              gatsbyImageData(placeholder: BLURRED)
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
    <div className={clsx(layoutStyle, "layout")} id={`layout`} data-is-root-path={isHomePage}>
      <Header siteLogoData={siteLogoData} siteLogoAltText={siteLogoAltText}></Header>

      <Box as={"main"} role="main" mb={"64"} className={clsx("content", mainStyle)}>
        {children}
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
