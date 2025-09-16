import { HeadProps, PageProps } from "gatsby";
import * as React from "react";
import HeaderHome from "../components/HeaderHome";
import PostsList from "../components/PostsList";
import { Box } from "../components/Box";
import { lightTheme } from "../styles/themes/lightTheme.css";
import clsx from "clsx";
import { SEO } from "../components/SEO";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Footer from "../components/Footer";

const App: React.FC<PageProps> = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      import("jarallax").then(({ jarallax }) => {
        jarallax(document.querySelectorAll(".jarallax"), {});
      });
    }
  }, []);
  return (
    <div className={clsx(lightTheme, "home")}>
      <HeaderHome></HeaderHome>
      <Box as={"div"} className={"content"} height={"100vh"} py="32">
        <PostsList />
      </Box>
      <Footer />
    </div>
  );
};

export default App;

// HEAD COMPONENT FOR SEO
export const Head: React.FC = () => {
  const { title: defaultTitle, description: defaultDescription, siteUrl, siteLogoUrl } = useSiteMetadata();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: defaultTitle,
        description: defaultDescription,
        publisher: {
          "@type": "Organization",
          name: defaultTitle,
          logo: {
            "@type": "ImageObject",
            url: siteLogoUrl,
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}#webpage`,
        url: siteUrl,
        name: defaultTitle,
        description: defaultDescription,
        isPartOf: {
          "@id": `${siteUrl}#website`,
        },
      },
    ],
  };

  return (
    <SEO
      title={defaultTitle}
      description={defaultDescription}
      url={siteUrl}
      type="website"
      canonical={siteUrl}
      jsonLd={jsonLd}
    />
  );
};
