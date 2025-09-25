import { graphql, useStaticQuery } from "gatsby";

type seoMetadata = {
  site: {
    siteMetadata: {
      siteUrl: string;
      author: string;
    };
  }
  wp: {
    siteLogo: {
      sourceUrl: string;
    }
    generalSettings: {
      title: string;
      description: string;
    }
    siteFavicon: {
      sourceUrl: string;
    }
    seo: {
      social: {
        twitter: {
          username: string;
        }
      }
    }
  }

};


export const useSeoMetadata = () => {
  const { wp, site } = useStaticQuery<seoMetadata>(graphql`
    query seoMetaData {
      site {
        siteMetadata {
          siteUrl
          author
        }
      }
      wp{
        generalSettings {
          title
          description
        }
        siteLogo {
          sourceUrl
        }
        siteFavicon {
          sourceUrl
        }
        seo {
          social {
            twitter {
              username
            }
          }
        }
      }
    }
  `);

  return {
    ...wp.generalSettings,
    ...site.siteMetadata,
    siteLogoUrl: wp.siteLogo.sourceUrl,
    siteFaviconUrl: wp.siteFavicon.sourceUrl,
    twitterUsername: wp.seo.social.twitter.username
  };
};
