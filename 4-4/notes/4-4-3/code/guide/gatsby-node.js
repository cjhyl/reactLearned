const path = require("path")

// 创建页面
// function createPages({ actions }) {
//   const { createPage } = actions
//   // 获取模板的绝对路径
//   const template = require.resolve("./src/templates/person.js")
//   // 获取模板所需要的数据
//   const persons = [
//     { slug: "zhangsan", name: "张三", age: 20 },
//     { slug: "lisi", name: "李四", age: 30 },
//   ]
//   // 根据模板和数据创建页面
//   persons.forEach(person => {
//     createPage({
//       // 模板绝对路径
//       component: template,
//       // 访问地址
//       path: `/person/${person.slug}`,
//       // 传递给模板的数据
//       context: person,
//     })
//   })
// }

async function createPages({ graphql, actions }) {
  const { createPage } = actions
  // 1. 获取模板文件的绝对路径
  const template = require.resolve("./src/templates/article.js")
  // 2. 获取页面的访问标识
  let { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  // 3. 创建页面
  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      component: template,
      path: `/article/${node.fields.slug}`,
      // 传递slug参数
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

// 构建数据节点时的钩子函数
function onCreateNode({ node, actions }) {
  const { createNodeField } = actions
  // 判断数据类型为markdown
  if (node.internal.type === "MarkdownRemark") {
    // 从绝对路径名中得到文件名
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // 在节点中插入slug属性
    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

module.exports = {
  createPages,
  onCreateNode
}
