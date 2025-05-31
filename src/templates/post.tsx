import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Layout from "../components/layout";

const PostTemplate: React.FC<PageProps<Queries.PostByIdQuery>> = ({
  data: { previousPost, nextPost, currentPost },
}) => {
  const featuredImage = {
    image: currentPost?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: currentPost?.featuredImage?.node?.altText || ``,
  };

  return (
    <Layout isHomePage={false}>
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{parse(currentPost?.title ?? "")}</h1>

          <p>{currentPost?.date}</p>

          {featuredImage?.image && <GatsbyImage alt={featuredImage.alt} image={featuredImage.image} />}
        </header>

        {!!currentPost?.content && <section itemProp="articleBody">{parse(currentPost.content)}</section>}

        <hr />
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
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

export const postQuery = graphql`
  query PostById($id: String!, $previousPostId: String, $nextPostId: String) {
    currentPost: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1000, quality: 90)
            }
          }
        }
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
