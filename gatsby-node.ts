import path from "path";
import { slash } from "gatsby-core-utils";
import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<Queries.AllPostsAndPagesQuery>(`
    query AllPostsAndPages {
      allWpPost(sort: {date: ASC}) {
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
      allWpPage {
        nodes {
          id
          uri
          wpChildren {
            nodes {
              id
            }
          }
          wpParent {
            node {
              id
            }
          }
        }
      }
    }
  `);

  if (!result || !result.data) {
    throw new Error("GraphQL query for posts and pages failed");
  }

  const allPosts = result.data.allWpPost.edges;
  const allPages = result.data.allWpPage.nodes;
  const postTemplate = path.resolve(`./src/templates/post.tsx`);
  const pageTemplate = path.resolve(`./src/templates/page.tsx`);

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
  allPages.forEach((page) => {
    createPage({
      path: page.uri ?? "",
      component: slash(pageTemplate),
      context: {
        id: page.id,
        childrenPages: page.wpChildren?.nodes,
        parentPage: page.wpParent?.node.id,
      },
    });
  });
};
