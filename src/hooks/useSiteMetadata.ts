import { graphql, useStaticQuery } from "gatsby";

type SiteMetadata = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      author: string;
    };
  }
  wp: {
    siteLogo: {
      sourceUrl: string;
    };
  }
};


export const useSiteMetadata = () => {
  const { site, wp } = useStaticQuery<SiteMetadata>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
        }
      }
      wp{
        siteLogo {
          sourceUrl
        }
      }
    }
  `);

  return { ...site.siteMetadata, siteLogoUrl: wp.siteLogo.sourceUrl };
};
