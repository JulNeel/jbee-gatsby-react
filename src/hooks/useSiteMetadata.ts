import { graphql, useStaticQuery } from "gatsby";

type SiteMetadata = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      author: string;
    };
  };
};


export const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetadata>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
        }
      }
    }
  `);

  return site.siteMetadata;
};
