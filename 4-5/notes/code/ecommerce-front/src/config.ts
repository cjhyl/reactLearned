export let API: string

// react脚手架中的环境变量必须REACT_APP开头，否则不会识别
if (process.env.NODE_ENV === "development") {
  // 后面增加叹号，非空断言
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else if (process.env.NODE_ENV === "production") {
  API = process.env.REACT_APP_PRODUCTION_API_URL!
}