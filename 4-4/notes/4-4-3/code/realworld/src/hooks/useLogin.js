import { useState, useEffect } from "react"
import axios from "axios"

function useLogin() {
  // 第一个bool表示是否登录，第二个bool表示是否正在加载
  const [status, setStatus] = useState([false, true])
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      ;(async function () {
        try {
          await axios.get("/user", {
            headers: {
              Authorization: `Token ${token}`,
            },
          })
          setStatus([true, false])
        } catch (ex) {
          setStatus([false, false])
        }
      })()
    } else {
      setStatus([false, false])
    }
  }, [])
  return status
}

export default useLogin
