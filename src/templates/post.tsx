import React from "react";
import { Link, PageProps, HeadProps, graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Layout from "../components/Layout";
import { Box } from "../components/Box";
import { blogPostNavItemStyle, blogPostNavStyle } from "./post.css";
import Giscus from "../components/Giscus";

const PostTemplate: React.FC<PageProps<Queries.PostByIdQuery>> = ({
  data: { previousPost, nextPost, currentPost },
}) => {
  const imageData = currentPost?.featuredImage?.node?.localFile
    ? getImage(currentPost.featuredImage.node.localFile as ImageDataLike)
    : undefined;

  return (
    <Layout isHomePage={false}>
      <article itemScope itemType="http://schema.org/BlogPosting">
        <header>
          <h1 itemProp="headline">{parse(currentPost?.title ?? "")}</h1>
          <Box as="div" className="blog-post-meta" display="flex" justifyContent="space-between" mb={"8"} padding={"8"}>
            <Box as="span" ml="auto">
              {currentPost?.date}
            </Box>
          </Box>
          {imageData && (
            <GatsbyImage
              image={imageData}
              alt={currentPost?.featuredImage?.node?.altText || currentPost?.title || ""}
            />
          )}
        </header>
        {!!currentPost?.content && <section itemProp="articleBody">{parse(currentPost.content)}</section>}

        <Box as={"h2"}>Commentaires</Box>
        <Giscus />
        <Box as={"hr"} my={"64"} />
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

export const postQuery = graphql`
  query PostById($id: String!, $previousPostId: String, $nextPostId: String) {
    currentPost: wpPost(id: { eq: $id }) {
      title
      content
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
      seo {
        title
        metaDesc
        fullHead
        metaRobotsNoindex
        metaRobotsNofollow
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

export const Head: React.FC<HeadProps<Queries.PostByIdQuery>> = ({ data }) => {
  if (!data.currentPost?.seo?.fullHead) return null;

  return (
    <>
      <html lang="fr" />
      <div
        dangerouslySetInnerHTML={{
          __html: data.currentPost.seo.fullHead,
        }}
      />
    </>
  );
};
