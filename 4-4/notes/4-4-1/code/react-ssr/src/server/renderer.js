import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routes from '../share/routes'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'

export default (req, store) => {
  // 组件转换为字符串
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  const initalState = serialize(store.getState());
  return `
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITAL_STATE = ${initalState}</script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}