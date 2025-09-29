import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Box } from "./Box";
import { postsListStyle } from "./PostsList.css";
import PostsListItem from "./PostsListItem";

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
              gatsbyImage(width: 500)
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
        return <PostsListItem key={post.id} {...post} />;
      })}
    </Box>
  );
};

export default PostsList;
