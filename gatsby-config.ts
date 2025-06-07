import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Julien Bruneel, développeur web qu'il est bien `,
    author: 'Julien Bruneel',
    siteUrl: `https://julienbruneel.fr/`,
    description: "Un site statique rapide avec Gatsby",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://wp-api.julienbruneel.fr/graphql"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-vanilla-extract", "gatsby-plugin-sitemap", "gatsby-plugin-wpgraphql-seo", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
