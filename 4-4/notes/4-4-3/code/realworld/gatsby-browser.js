const React = require("react")
const Layout = require('./src/components/Layout.js').default
const { Provider } = require('react-redux')
const createStore = require('./src/store/createStore').default
const axios = require("axios")

axios.defaults.baseURL = "https://conduit.productionready.io/api"

// 页面组件钩子
exports.wrapPageElement = ({element}) => {
  return <Layout>{element}</Layout>
}

// 最外层组件钩子
exports.wrapRootElement = ({element}) => {
  return <Provider store={createStore()}>{element}</Provider>
}
