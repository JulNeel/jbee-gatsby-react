import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  canonical?: string;
  jsonLd?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;
  twitterUsername?: string;
};

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  image,
  url,
  type = "website",
  canonical,
  jsonLd,
  noindex = false,
  nofollow = false,
  twitterUsername,
}) => {
  const { wp } = useStaticQuery(graphql`
    query DefaultSeoQuery {
      wp {
        generalSettings {
          title
          description
          url
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

  const defaults = {
    title: wp.generalSettings?.title,
    description: wp.generalSettings?.description,
    siteUrl: wp.generalSettings?.url,
    twitter: wp.seo?.social?.twitter?.username,
    favicon: wp.siteFavicon?.sourceUrl,
  };

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: image ? `${defaults.siteUrl}${image}` : undefined,
    url: url || defaults.siteUrl,
    canonical: canonical || url || defaults.siteUrl,
    twitterUsername: twitterUsername || defaults.twitter,
  };

  const robots = `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`;

  return (
    <>
      {/* Title & Meta Description */}
      <title>{seo.title}</title>
      {seo.description && <meta name="description" content={seo.description} />}
      <meta name="robots" content={robots} />

      {/* Favicon depuis WordPress */}
      {defaults.favicon && (
        <>
          <link rel="icon" href={defaults.favicon} sizes="32x32" />
          <link rel="icon" href={defaults.favicon} sizes="192x192" />
          <link rel="apple-touch-icon" href={defaults.favicon} />
          <meta name="msapplication-TileImage" content={defaults.favicon} />
        </>
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.twitterUsername && <meta name="twitter:site" content={`@${seo.twitterUsername}`} />}
      <meta name="twitter:title" content={seo.title} />
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {/* Canonical */}
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}

      {/* JSON-LD */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>}
    </>
  );
};
