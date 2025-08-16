import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Julien Bruneel, développeur web qu\'il est bien',
    author: 'Julien Bruneel',
    siteUrl: `https://julienbruneel.fr/`,
    description: "Un site statique rapide avec Gatsby",
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
        filter: node =>
          node.internal.type === 'WpPost',
        source: node =>
          typeof node.content === 'string' && node.content.trim()
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


    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-vanilla-extract`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-wpgraphql-seo`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
