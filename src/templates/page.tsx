import React from "react";
import { PageProps, HeadProps, graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

// Gutenberg block styles
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Box } from "../components/Box";

const PageTemplate: React.FC<PageProps<Queries.PageByIdQuery>> = ({ data: { currentPage } }) => {
  const imageData = currentPage?.featuredImage?.node?.localFile
    ? getImage(currentPage.featuredImage.node.localFile as ImageDataLike)
    : undefined;

  return (
    <Layout isHomePage={false}>
      <article className="blog-post" itemScope itemType="http://schema.org/WebPage">
        <header>
          <h1 itemProp="headline">{parse(currentPage?.title ?? "")}</h1>
          <p>{currentPage?.date}</p>
          {imageData && (
            <GatsbyImage
              image={imageData}
              alt={currentPage?.featuredImage?.node?.altText ?? currentPage?.title ?? ""}
            />
          )}
        </header>

        {!!currentPage?.content && <section itemProp="articleBody">{parse(currentPage.content)}</section>}

        <Box as={"hr"} mb={"64"} />
      </article>
    </Layout>
  );
};

export default PageTemplate;

// HEAD COMPONENT FOR SEO
export const Head: React.FC<HeadProps<Queries.PageByIdQuery>> = ({ data }) => {
  const { currentPage, site } = data;

  if (!currentPage || !currentPage.seo) return null;

  const image = currentPage.featuredImage?.node?.sourceUrl;
  const { title: defaultTitle, description: defaultDescription, author: defaultAuthor, siteUrl } = useSiteMetadata();
  const url = `${siteUrl}${currentPage.uri}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: currentPage.seo.title,
    description: currentPage.seo.metaDesc ?? defaultDescription,
    author: {
      "@type": "Person",
      name: defaultAuthor,
    },
    datePublished: currentPage.date,
    mainEntityOfPage: url,
    image,
  };

  return (
    <SEO
      title={currentPage.seo.title ?? currentPage.title ?? defaultTitle}
      description={currentPage.seo.metaDesc ?? defaultDescription}
      author={defaultAuthor}
      image={image ?? ""}
      url={url}
      type="article"
      canonical={url}
      jsonLd={jsonLd}
      noindex={currentPage.seo.metaRobotsNoindex === "noindex"}
      nofollow={currentPage.seo.metaRobotsNofollow === "nofollow"}
    />
  );
};

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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
