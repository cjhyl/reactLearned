const React = require("react")
const { Provider } = require('react-redux')
const createStore = require('./src/store/createStore').default


// 最外层组件钩子
exports.wrapRootElement = ({element}) => {
  return <Provider store={createStore()}>{element}</Provider>
}
