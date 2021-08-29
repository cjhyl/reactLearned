import React, { FC } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { isAuth } from "../../helpers/auth"
import { Jwt } from "../../store/models/auth"

interface AdminRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

const AdminRoute: FC<AdminRouteProps> = ({component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={props => {
        const auth = isAuth()
        // 已登录，则加载页面
        if (auth) {
          const {user: { role }} = auth as Jwt
          if(role === 1){
            return <Component {...props} />
          }
        }
        // 未登录，则跳转登录页面
        return <Redirect to="/signin" />
      }}
    />
  )
}

export default AdminRoute
