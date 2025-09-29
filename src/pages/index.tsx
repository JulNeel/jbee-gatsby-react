import { PageProps } from "gatsby";
import * as React from "react";
import HeaderHome from "../components/HeaderHome";
import PostsList from "../components/PostsList";
import { Box } from "../components/Box";
import { lightTheme } from "../styles/themes/lightTheme.css";
import clsx from "clsx";
import { SEO } from "../components/SEO";
import Footer from "../components/Footer";
import { useSeoMetadata } from "../hooks/useSeoMetadata";

const App: React.FC<PageProps> = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!isClient) return;

    import("jarallax")
      .then(({ jarallax }) => {
        const elements = document.querySelectorAll(".jarallax");
        if (elements.length) {
          jarallax(elements, {});
        }
      })
      .catch((err) => console.error("Erreur lors du chargement de Jarallax :", err));
  }, [isClient]);

  return (
    <div className={clsx(lightTheme, "home")}>
      <HeaderHome />
      <Box role="main" as="div" className="content" height="100vh" py="32">
        <PostsList />
      </Box>
      <Footer />
    </div>
  );
};

export default App;

// HEAD COMPONENT FOR SEO
export const Head: React.FC = () => {
  const { title: siteTitle, description: siteDescription, siteUrl, siteLogoUrl } = useSeoMetadata();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        inLanguage: "fr",
        publisher: {
          "@type": "Organization",
          name: siteTitle,
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: siteLogoUrl,
          },
          sameAs: [
            "https://www.facebook.com/jbee.dev",
            "https://www.linkedin.com/in/julienbruneel/",
            "https://github.com/JulNeel",
          ],
        },
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}#webpage`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        inLanguage: "fr",
        isPartOf: {
          "@id": `${siteUrl}#website`,
        },
      },
    ],
  };

  return (
    <SEO
      title={siteTitle}
      description={siteDescription}
      url={siteUrl}
      type="website"
      canonical={siteUrl}
      jsonLd={jsonLd}
    />
  );
};
