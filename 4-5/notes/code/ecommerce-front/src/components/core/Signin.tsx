import { Button, Form, Input, Result } from "antd"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { isAuth } from "../../helpers/auth"
import { signin, SigninPayload } from "../../store/actions/auth.action"
import { Jwt } from "../../store/models/auth"
import { AppState } from "../../store/reducers"
import { AuthState } from "../../store/reducers/auth.reducer"
import Layout from "./Layout"

const Signin = () => {
  // 获取 dispatch
  const dispatch = useDispatch()
  // 登录表单提交
  const onFinish = (value: SigninPayload) => {
    // 发送登录请求
    dispatch(signin(value))
  }
   // 1. 获取登录结果
   const auth = useSelector<AppState, AuthState>(state => state.auth)
   // 2. 登录失败 显示错误信息
   const showError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return (
        <Result
          status="warning"
          title="登录失败"
          subTitle={auth.signin.message}
        />
      )
    }
  }
   // 3. 登录成功 根据角色跳转到对应的管理页面
   const redirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      // 使用as断言auth一定是Jwt类型，从中解析user和role
      const {user: { role }} = auth as Jwt

      if (role === 0) {
        // 注册用户
        return <Redirect to="/user/dashboard" />
      } else {
        // 管理员
        return <Redirect to="/admin/dashboard" />
      }
    }
  }
  const signinForm = () => (
    <Form onFinish={onFinish}>
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
   // 4. 处理导航链接 已登录 隐藏 [登录, 注册] 显示 [dashboard]
  return (
    <Layout title="登录" subTitle="请输入邮箱密码登录吧">
      {showError()}
      {redirectToDashboard()}
      {signinForm()}
    </Layout>
  )
}

export default Signin
