import React from "react";
import { Box } from "./Box";
import { GatsbyImage } from "gatsby-plugin-image";
import { PostExcerptStyle, thumbnailStyle, thumbnailWrapperStyle } from "./PostsListItem.css";

type Post = NonNullable<Queries.PostsListQuery["allWpPost"]["posts"][number]>;

const PostsListItem: React.FC<Post> = (post) => {
  const gatsbyImage = post.featuredImage?.node.gatsbyImage;
  const altText = post.featuredImage?.node.altText;

  return (
    <Box
      as="a"
      key={post.id}
      display="flex"
      href={post.uri ?? ""}
      color="default"
      flexDirection="column"
      textDecorationLine="none"
    >
      <Box as="div" className={thumbnailWrapperStyle}>
        {gatsbyImage && (
          <GatsbyImage image={gatsbyImage} className={thumbnailStyle} alt="" fetchPriority="high" loading="eager" />
        )}
      </Box>
      <Box as="h3" textDecorationLine="none" color="default" fontSize="medium" my="4">
        {post.title}
      </Box>
      {post.excerpt && (
        <Box
          as="div"
          className={PostExcerptStyle}
          fontSize={"small"}
          textDecorationLine="none"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      )}
    </Box>
  );
};

export default PostsListItem;
