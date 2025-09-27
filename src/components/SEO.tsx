import * as React from "react";

import { useSeoMetadata } from "../hooks/useSeoMetadata";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  canonical?: string;
  jsonLd?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;
};
export const SEO: React.FC<SeoProps> = (seo) => {
  const { siteUrl, siteFaviconUrl, twitterUsername } = useSeoMetadata();
  const headerSeoProps = {
    title: seo.title,
    description: seo.description,
    image: seo.image,
    url: siteUrl,
    canonical: seo.canonical ?? siteUrl,
    twitterUsername: twitterUsername,
    noindex: seo.noindex,
    nofollow: seo.nofollow,
    favicon: siteFaviconUrl,
    jsonLd: seo.jsonLd,
    type: seo.type ?? "website",
  };
  const robots = `${seo.noindex ? "noindex" : "index"}, ${seo.nofollow ? "nofollow" : "follow"}`;
  return (
    <>
      <html lang="fr" />
      {/* Title & Meta Description */}
      <title>{headerSeoProps.title}</title>
      {headerSeoProps.description && <meta name="description" content={headerSeoProps.description} />}
      <meta name="robots" content={robots} />

      {/* Favicon depuis WordPress */}
      {headerSeoProps.favicon && (
        <>
          <link rel="icon" href={headerSeoProps.favicon} sizes="32x32" />
          <link rel="icon" href={headerSeoProps.favicon} sizes="192x192" />
          <link rel="apple-touch-icon" href={headerSeoProps.favicon} />
          <meta name="msapplication-TileImage" content={headerSeoProps.favicon} />
        </>
      )}

      {/* Open Graph */}
      <meta property="og:type" content={headerSeoProps.type} />
      <meta property="og:url" content={headerSeoProps.url} />
      <meta property="og:title" content={headerSeoProps.title} />
      {headerSeoProps.description && <meta property="og:description" content={headerSeoProps.description} />}
      {headerSeoProps.image && <meta property="og:image" content={headerSeoProps.image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {headerSeoProps.twitterUsername && <meta name="twitter:site" content={`@${headerSeoProps.twitterUsername}`} />}
      <meta name="twitter:title" content={headerSeoProps.title} />
      {headerSeoProps.description && <meta name="twitter:description" content={headerSeoProps.description} />}
      {headerSeoProps.image && <meta name="twitter:image" content={headerSeoProps.image} />}

      {/* Canonical */}
      {headerSeoProps.canonical && <link rel="canonical" href={headerSeoProps.canonical} />}

      {/* JSON-LD */}
      {headerSeoProps.jsonLd && (
        <script type="application/ld+json">{JSON.stringify(headerSeoProps.jsonLd).replace(/</g, "\\u003c")}</script>
      )}
    </>
  );
};
