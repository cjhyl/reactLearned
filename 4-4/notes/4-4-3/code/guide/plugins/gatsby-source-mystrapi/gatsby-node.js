const axios = require("axios")
const pluralize = require("pluralize")
const { createNodeHelpers } = require("gatsby-node-helpers")

async function sourceNodes({ actions, createNodeId, createContentDigest }, configOptions) {
  const { createNode } = actions
  const { apiUrl, contentTypes } = configOptions;
  // Post -> posts  Product -> products
  const types = contentTypes
    .map(type => type.toLowerCase())
    .map(type => pluralize(type))
  // 请求数据
  let final = await getContents(types, apiUrl)
  for (let [key, value] of Object.entries(final)) {
    // 1. 构建数据节点对象 allPostsContent allProductsContent
    const { createNodeFactory } = createNodeHelpers({
      typePrefix: key,
      createNodeId,
      createContentDigest
    })
    const createNodeObject = createNodeFactory("content")
    // 2. 根据数据节点对象创建节点
    value.forEach(item => {
      createNode(createNodeObject(item))
    })
  }
}

async function getContents(types, apiUrl) {
  const size = types.length
  let index = 0
  // 结果数据 {posts: [], prodcuts: []}
  const final = {}
  // 递归读取数据
  await loadContents()
  async function loadContents() {
    if (index === size) return
    let { data } = await axios.get(`${apiUrl}/${types[index]}`)
    final[types[index++]] = data
    await loadContents()
  }
  return final
}

module.exports = {
  sourceNodes
}