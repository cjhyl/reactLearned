const { /*parseString, */parseStringPromise } = require("xml2js")
// const { promisify } = require("util")
// const parse = promisify(parseString)
const createNodeHelpers = require("gatsby-node-helpers").default

async function onCreateNode({ node, loadNodeContent, actions }) {
  const { createNode } = actions
  // 判断node是否是我们需要转换的节点
  if (node.internal.mediaType === "application/xml") {
    // 读取xml文件内容
    let content = await loadNodeContent(node)
    // let obj = await parse(content, {
    //   explicitArray: false,// 内容数据不会转换为数组
    //   explicitRoot: false,// 不产生根节点
    // })
    let obj = await parseStringPromise(content, {
      explicitArray: false,// 内容数据不会转换为数组
      explicitRoot: false,// 不产生根节点
    })
    // allXmlParsedContent
    const { createNodeFactory } = createNodeHelpers({
      typePrefix: "XML"
    })
    const createNodeObject = createNodeFactory("parsedContent")
    createNode(createNodeObject(obj))
  }
}

module.exports = {
  onCreateNode
}
