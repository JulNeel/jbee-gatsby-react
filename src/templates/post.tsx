import React from "react";
import { Link, PageProps, HeadProps, graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Box } from "../components/Box";
import { blogPostNavItemStyle, blogPostNavStyle } from "./post.css";

const PostTemplate: React.FC<PageProps<Queries.PostByIdQuery>> = ({
  data: { previousPost, nextPost, currentPost, currentPostHtml },
}) => {
  const authorName = currentPost?.author?.node.name || useSiteMetadata().author;
  const imageData = currentPost?.featuredImage?.node?.localFile
    ? getImage(currentPost.featuredImage.node.localFile as ImageDataLike)
    : undefined;

  return (
    <Layout isHomePage={false}>
      <article className="blog-post" itemScope itemType="http://schema.org/BlogPosting">
        <header>
          <h1 itemProp="headline">{parse(currentPost?.title ?? "")}</h1>
          <Box
            as="div"
            className="blog-post-meta"
            display="flex"
            justifyContent="space-between"
            mb={"8"}
            backgroundColor="primary"
            padding={"8"}
            color="white"
          >
            <span>par {authorName}</span>
            <span>{currentPost?.date}</span>
          </Box>
          {imageData && (
            <GatsbyImage
              image={imageData}
              alt={currentPost?.featuredImage?.node?.altText || currentPost?.title || ""}
            />
          )}
        </header>

        {!!currentPostHtml?.html && <section itemProp="articleBody">{parse(currentPostHtml?.html)}</section>}

        <hr />
      </article>

      <nav>
        <Box as={"ul"} fontSize={"small"} className={blogPostNavStyle}>
          <Box as={"li"} marginRight={"auto"} className={blogPostNavItemStyle}>
            {previousPost && (
              <Link to={previousPost.uri ?? ""} rel="prev">
                ← {parse(previousPost.title ?? "")}
              </Link>
            )}
          </Box>
          <Box marginLeft={"auto"} as={"li"} className={blogPostNavItemStyle}>
            {nextPost && (
              <Link to={nextPost.uri ?? ""} rel="next">
                {parse(nextPost.title ?? "")} →
              </Link>
            )}
          </Box>
        </Box>
      </nav>
    </Layout>
  );
};

export default PostTemplate;

// HEAD COMPONENT FOR SEO
export const Head: React.FC<HeadProps<Queries.PostByIdQuery>> = ({ data }) => {
  const { currentPost, site } = data;

  if (!currentPost || !currentPost.seo) return null;

  const { title: defaultTitle, author: defaultAuthor } = useSiteMetadata();
  const image = currentPost.featuredImage?.node?.sourceUrl;
  const url = `${site?.siteMetadata?.siteUrl}${currentPost.uri}`;
  const authorName = currentPost.author?.node.name ?? defaultAuthor;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: currentPost.seo.title,
    description: currentPost.seo.metaDesc,
    author: {
      "@type": "Person",
      name: authorName,
    },
    datePublished: currentPost.date,
    mainEntityOfPage: url,
    image,
  };

  return (
    <SEO
      title={currentPost.seo.title ?? currentPost.title ?? defaultTitle}
      description={currentPost.seo.metaDesc ? currentPost.seo.metaDesc : currentPost.excerpt ?? undefined}
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

export const postQuery = graphql`
  query PostById($id: String!, $previousPostId: String, $nextPostId: String) {
    currentPost: wpPost(id: { eq: $id }) {
      title
      excerpt
      date(formatString: "DD MMMM YYYY", locale: "fr")
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
    currentPostHtml: htmlRehype(parent: { id: { eq: $id } }) {
      html
      internal {
        content
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
