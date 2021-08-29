const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
// 清理打包内容中node环境相关代码
const nodeExternals = require('webpack-node-externals')

const config = {
  target: 'node',// 运行环境：nodejs
  entry: './src/server/index.js',// 入口文件
  output: {// 输出文件
    path: path.join(__dirname, 'build'),// 路径：根目录下的build文件夹
    filename: 'bundle.js'// 输出文件名称
  },
  externals: [nodeExternals()]
}

module.exports = merge(baseConfig, config)
