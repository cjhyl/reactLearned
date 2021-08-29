/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-create-client-paths",
      // 客户端路由匹配
      options: { prefixes: ["/app/*"] },
    },
    {
      resolve: "gatsby-source-list",
      options: { apiUrl: "https://conduit.productionready.io/api" },
    },
    "gatsby-plugin-article",
  ],
}
