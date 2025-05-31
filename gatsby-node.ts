import path from "path";
import { slash } from "gatsby-core-utils";
import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<Queries.AllPostsQuery>(`
    query AllPosts {
      allWpPost(sort: {date: DESC}) {
        edges {
          node {
            id
            uri
          }
          previous {
            id
          }
          next {
            id
          }
        }
      }
    }
  `);

  if (!result || !result.data) {
    throw new Error("GraphQL query for posts failed");
  }

  const allPosts = result.data.allWpPost.edges;
  const postTemplate = path.resolve(`./src/templates/post.tsx`);

  allPosts.forEach((post) => {
    createPage({
      path: post.node.uri ?? "",
      component: slash(postTemplate),
      context: {
        id: post.node.id,
        previousPostId: post.previous?.id,
        nextPostId: post.next?.id,
      },
    });
  });
};
