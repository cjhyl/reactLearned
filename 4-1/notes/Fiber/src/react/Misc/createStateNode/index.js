import { createDOMElement } from "../../DOM"
import { createReactInstance } from "../createReactInstance"

const createStateNode = fiber => {
  if (fiber.tag === "host_component") {
    return createDOMElement(fiber)
  } else {
    // 处理组件
    return createReactInstance(fiber)
  }
}

export default createStateNode
