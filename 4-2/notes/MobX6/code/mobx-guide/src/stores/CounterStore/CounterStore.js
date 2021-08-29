import { makeAutoObservable } from "mobx"

class CounterStore {
  // 数值状态
  count = 10
  person = { name: "张三" }
  constructor() {
    // 将参数对象中的属性设置为 observable state
    // 将参数对象中的方法设置为 action
    makeAutoObservable(this)

    // target: 将目标对象中的属性和方法设置为 observable state 和 action
    // overrides: 覆盖默认设置, 将 target 对象中的某些属性或者方法设置为普通属性
    // options: 配置对象, autoBind, 使 action 方法始终拥有正确的 this 指向 使onClick={counterStore.reset}和onClick={() => counterStore.reset()}的this指向一致
    // makeAutoObservable(target, overrides?, options?)
    // makeAutoObservable(this, {reset: false}, {autoBind: true})
  }
	// 使数值状态加一
  increment() {
    this.count += 1
  }
	// 重置数值状态
  reset() {
    this.count = 0
  }
}

export default CounterStore