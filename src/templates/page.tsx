import React from "react";
import { PageProps, HeadProps, graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

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

// HEAD COMPONENT FOR SEO
export const Head: React.FC<HeadProps<Queries.PageByIdQuery>> = ({ data }) => {
  const { currentPage } = data;

  if (!currentPage || !currentPage.seo) return null;

  const {
    title: defaultTitle,
    description: defaultDescription,
    author: defaultAuthor,
    siteUrl,
    siteLogoUrl,
  } = useSiteMetadata();

  const seoTitle = currentPage.seo.title ?? currentPage.title ?? defaultTitle;
  const seoDescription = currentPage.seo.metaDesc ?? defaultDescription;
  const image = currentPage.featuredImage?.node?.sourceUrl ?? undefined;
  const url = `${siteUrl}${currentPage.uri}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: seoTitle,
        description: seoDescription,
        ...(image && {
          image: {
            "@type": "ImageObject",
            url: image,
          },
        }),
        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteUrl}#website`,
          url: siteUrl,
          name: defaultTitle,
          publisher: {
            "@type": "Organization",
            name: defaultAuthor,
            logo: {
              "@type": "ImageObject",
              url: siteLogoUrl,
            },
          },
        },
      },
    ],
  };

  return (
    <SEO
      title={seoTitle}
      description={seoDescription}
      image={image}
      url={url}
      type="website"
      canonical={url}
      jsonLd={jsonLd}
      noindex={currentPage.seo.metaRobotsNoindex === "noindex"}
      nofollow={currentPage.seo.metaRobotsNofollow === "nofollow"}
    />
  );
};
