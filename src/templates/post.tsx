import React from "react";
import { Link, PageProps, HeadProps, graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

// Gutenberg block styles
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const PostTemplate: React.FC<PageProps<Queries.PostByIdQuery>> = ({
  data: { previousPost, nextPost, currentPost },
}) => {
  const imageData = currentPost?.featuredImage?.node?.localFile
    ? getImage(currentPost.featuredImage.node.localFile as ImageDataLike)
    : undefined;

  return (
    <Layout isHomePage={false}>
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{parse(currentPost?.title ?? "")}</h1>
          <p>{currentPost?.date}</p>
          {imageData && (
            <GatsbyImage
              image={imageData}
              alt={currentPost?.featuredImage?.node?.altText || currentPost?.title || ""}
            />
          )}
        </header>

        {!!currentPost?.content && <section itemProp="articleBody">{parse(currentPost.content)}</section>}

        <hr />
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {previousPost && (
              <Link to={previousPost.uri ?? ""} rel="prev">
                ← {parse(previousPost.title ?? "")}
              </Link>
            )}
          </li>
          <li>
            {nextPost && (
              <Link to={nextPost.uri ?? ""} rel="next">
                {parse(nextPost.title ?? "")} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default PostTemplate;

export const Head: React.FC<HeadProps<Queries.PostByIdQuery>> = ({ data }) => {
  const { currentPost, site } = data;

  if (!currentPost || !currentPost.seo) return null;

  const image = currentPost.featuredImage?.node?.sourceUrl;
  const url = `${site?.siteMetadata?.siteUrl}${currentPost.uri}`;
  const {
    title: defaultTitle,
    description: defaultDescription,
    author: defaultAuthor,
    siteUrl: defaultSiteUrl,
  } = useSiteMetadata();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: currentPost.seo.title,
    description: currentPost.seo.metaDesc,
    author: {
      "@type": "Person",
      name: currentPost.author?.node?.name,
    },
    datePublished: currentPost.date,
    mainEntityOfPage: url,
    image,
  };

  return (
    <SEO
      title={currentPost.seo.title ?? currentPost.title ?? defaultTitle}
      description={currentPost.seo.metaDesc ? currentPost.seo.metaDesc : currentPost.excerpt ?? undefined}
      author={currentPost.author?.node.name ?? defaultAuthor}
      image={image ?? ""}
      url={url}
      type="article"
      canonical={url}
      jsonLd={jsonLd}
      noindex={currentPost.seo.metaRobotsNoindex === "noindex"}
      nofollow={currentPost.seo.metaRobotsNofollow === "nofollow"}
    />
  );
};

// GraphQL query
export const postQuery = graphql`
  query PostById($id: String!, $previousPostId: String, $nextPostId: String) {
    currentPost: wpPost(id: { eq: $id }) {
      title
      content
      excerpt
      date
      uri
      featuredImage {
        node {
          altText
          sourceUrl
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(width: 1200, formats: [AUTO, WEBP])
            }
          }
        }
      }
      author {
        node {
          name
        }
      }
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        metaRobotsNoindex
        metaRobotsNofollow
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }

    previousPost: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    nextPost: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`;
