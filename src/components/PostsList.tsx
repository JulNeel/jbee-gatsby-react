import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Box } from "./Box";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { postsListStyle, thumbnailStyle, thumbnailWrapperStyle } from "./PostsList.css";
const PostsList: React.FC = () => {
  const data: Queries.PostsListQuery = useStaticQuery(graphql`
    query PostsList {
      allWpPost(sort: { date: DESC }) {
        posts: nodes {
          title
          excerpt
          id
          featuredImage {
            node {
              gatsbyImage(width: 400)
              altText
            }
          }
          uri
        }
      }
    }
  `);

  const { posts } = data.allWpPost;

  return (
    <Box as="div" className={postsListStyle}>
      {posts.map((post) => {
        const gatsbyImage = post.featuredImage?.node.gatsbyImage;
        const altText = post.featuredImage?.node.altText;

        return (
          <Link to={post.uri ?? ""}>
            <Box as="a" key={post.id} display="flex" flexDirection="column">
              <Box as="div" className={thumbnailWrapperStyle}>
                {gatsbyImage && (
                  <GatsbyImage image={gatsbyImage} className={thumbnailStyle} alt={altText ?? post.title ?? ""} />
                )}
              </Box>
              <Box as="h3">{post.title}</Box>
              {post.excerpt && <Box as="div">{parse(post.excerpt)}</Box>}
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default PostsList;
