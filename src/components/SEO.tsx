import * as React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

type SeoProps = {
  title: string;
  description?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  twitterUsername?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;
};

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  author,
  image,
  url,
  type = "website",
  twitterUsername,
  canonical,
  jsonLd,
  noindex = false,
  nofollow = false,
}) => {
  const robots = `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`;
  return (
    <>
      <meta name="author" content={author} />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:site" content={`@${twitterUsername}`} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  );
};
