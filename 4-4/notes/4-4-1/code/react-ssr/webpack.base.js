module.exports = {
  mode: 'development',// 模式：开发模式
  module: {
    rules: [{// 打包规则
      test: /\.js$/,// 匹配：以.js结尾的
      exclude: /node_modules/,// 剔除node_modules文件夹
      use: {
        loader: 'babel-loader',// 使用babel-loader处理
        options: {// loader属性配置
          presets: [// 预置处理
            [
              "@babel/preset-env",// 处理高级js语法
              {
                /**
                 * 配置了"useBuiltIns": "usage"后，Babel 会在你使用到 ES2015+ 新特性时，自动添加 babel-polyfill 的引用，并且是 partial 级别的引用。
                 * usage 的行为类似 babel-transform-runtime，不会造成全局污染，因此也会不会对类似 Array.prototype.includes() 进行 polyfill。
                 */
                "useBuiltIns": "usage"
              }
            ],
            "@babel/preset-react"// 处理react的jsx语法
          ]
        }
      }
    }]
  }
}