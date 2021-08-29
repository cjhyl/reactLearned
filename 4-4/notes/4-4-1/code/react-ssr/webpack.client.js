const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
  entry: './src/client/index.js',// 入口文件
  output: {// 输出文件
    path: path.join(__dirname, 'public'),// 路径：根目录下的build文件夹
    filename: 'bundle.js'// 输出文件名称
  }
}

module.exports = merge(baseConfig, config)
