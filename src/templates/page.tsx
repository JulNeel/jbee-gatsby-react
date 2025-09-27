import React from "react";
import { PageProps, HeadProps, graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Layout from "../components/Layout";
import { useSeoMetadata } from "../hooks/useSeoMetadata";
import { SEO } from "../components/SEO";

const PageTemplate: React.FC<PageProps<Queries.PageByIdQuery>> = ({ data: { currentPage } }) => {
  const imageData = currentPage?.featuredImage?.node?.localFile
    ? getImage(currentPage.featuredImage.node.localFile as ImageDataLike)
    : undefined;

  return (
    <Layout isHomePage={false}>
      <article itemScope itemType="http://schema.org/WebPage">
        <header>
          <h1 itemProp="headline">{parse(currentPage?.title ?? "")}</h1>
          {imageData && (
            <GatsbyImage
              image={imageData}
              alt={currentPage?.featuredImage?.node?.altText ?? currentPage?.title ?? ""}
            />
          )}
        </header>

        {!!currentPage?.content && <section itemProp="articleBody">{parse(currentPage.content)}</section>}
      </article>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageById($id: String) {
    currentPage: wpPage(id: { eq: $id }) {
      date(formatString: "DD MMMM YYYY", locale: "fr")
      title
      content
      uri
      seo {
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
      }
      featuredImage {
        node {
          altText
          sourceUrl
          gatsbyImage(layout: FULL_WIDTH)
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1200, formats: AUTO)
            }
          }
          seo {
            metaDesc
            title
            metaRobotsNoindex
            metaRobotsNofollow
          }
        }
      }
      wpChildren {
        nodes {
          children {
            id
          }
        }
      }
      wpParent {
        node {
          id
        }
      }
    }
  }
`;
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
        "@type": "WebPage",
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
