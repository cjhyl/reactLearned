/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "hello Gatsby",
    description: "Gatsby Test Demo",
    author: "Cjh",
  },
  /* Your site config here */
  plugins: [
    // 读取本地json文件中的数据至数据层
    // json文件夹中放入图片文件后，图片文件数据也会自动读入数据层
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "json",
        path: `${__dirname}/json/`,
      },
    },
    // 读取src/posts目录下的文件至数据层
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/posts/`,
      },
    },
    // 读取xml文件夹下的文件至数据层
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "xml",
        path: `${__dirname}/xml/`,
      },
    },
    // 把数据层中的原始markdown数据转换为js对象
    {
      resolve: "gatsby-transformer-remark",
      options: {
        // 处理markdown中的图片
        plugins: ["gatsby-remark-images"],
      },
    },
    // 把本地josn文件按中读取到的原始json字符串转换为javascript对象
    "gatsby-transformer-json",
    // 提供本地图像处理功能(调整图想尺寸，压缩图像体积等)
    "gatsby-plugin-sharp",
    // 把gatsby-plugin-sharp处理后的图像信息添加到数据层
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiUrl: "localhost:1337",
    //     contentTypes: ["Post"]
    //   }
    // }
    {
      resolve: "gatsby-source-mystrapi",
      options: {
        apiUrl: "http://localhost:1337",
        contentTypes: ["Post", "Product"]
      }
    },
    "gatsby-transformer-xml",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-less"
  ]
}
