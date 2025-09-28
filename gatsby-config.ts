import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Julien Bruneel, développeur web',
    author: 'Julien Bruneel',
    siteUrl: `https://julienbruneel.fr`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: "https://wp-api.julienbruneel.fr/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-transformer-rehype`,
      options: {
        filter: (node: Queries.WpPost | Queries.WpPage) =>
          node.internal.type === 'WpPost'
          || node.internal.type === 'WpPage',
        source: (node: Queries.WpPost | Queries.WpPage) =>
          typeof node.content === 'string'
            ? node.content
            : null,
        plugins: [{
          resolve: `gatsby-rehype-prismjs`,
          options: {
            classPrefix: "language-",
            divClassNames: "code-wrapper",
            showLineNumbers: true,
            noInlineHighlight: false,
          },
        }]
      },
    },

    {
      resolve: `gatsby-plugin-image`,
      options: {
        loading: "eager",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-vanilla-extract`,
    `gatsby-plugin-wpgraphql-seo`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './static/images',
      },
      __key: 'images',
    },
    `gatsby-plugin-sitemap`,
  ],
};

export default config;
