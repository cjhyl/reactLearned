export default function unmountNode(node) {
  /*
    卸载节点并不是说将节点直接删除就可以了，还需要考虑以下几种情况
    1. 如果要删除的节点是文本节点的话可以直接删除
    2. 如果要删除的节点由组件生成，需要调用组件卸载生命周期函数
    3. 如果要删除的节点中包含了其他组件生成的节点，需要调用其他组件的卸载生命周期函数
    4. 如果要删除的节点身上有 ref 属性，还需要删除通过 ref 属性传递给组件的 DOM 节点对象
    5. 如果要删除的节点身上有事件，需要删除事件对应的事件处理函数 
  */

  // 获取节点的 _virtualDOM 对象
  const virtualDOM = node._virtualDOM
  // 1. 文本节点可以直接删除
  if (virtualDOM.type === "text") {
    // 删除直接
    node.remove()
    // 阻止程序向下执行
    return
  }
  // 2. 看一下节点是否是由组件生成的
  let component = virtualDOM.component
  // 如果 component 存在 就说明节点是由组件生成的
  if (component) {
    component.componentWillUnmount()
  }
  // 3. 看一下节点身上是否有ref属性
  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(null)
  }
  // 4. 看一下节点的属性中是否有事件属性
  Object.keys(virtualDOM.props).forEach(propName => {
    if (propName.slice(0, 2) === "on") {
      const eventName = propName.toLowerCase().slice(0, 2)
      const eventHandler = virtualDOM.props[propName]
      node.removeEventListener(eventName, eventHandler)
    }
  })

  // 5. 递归删除子节点
  if (node.childNodes.length > 0) {
    for (let i = 0; i < node.childNodes.length; i++) {
      unmountNode(node.childNodes[i])
      i--
    }
  }

  // 删除节点
  node.remove()
}
