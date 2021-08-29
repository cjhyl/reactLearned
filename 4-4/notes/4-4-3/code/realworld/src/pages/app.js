import React from "react"
// gatsby内部模块
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Create from "../components/create"
import Settings from "../components/settings"

export default function App() {
  // path属性重定义路由路径 /app/开头以匹配客户端路由插件规则
  return (
    <Router basepath="/app">
      <PrivateRoute component={Settings} path="/settings" />
      <PrivateRoute component={Create} path="/create" />
    </Router>
  )
}
