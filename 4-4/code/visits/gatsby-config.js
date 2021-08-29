/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://106.53.9.65:1337",
        collectionTypes: ["visit"]
      }
    }
  ],
}
