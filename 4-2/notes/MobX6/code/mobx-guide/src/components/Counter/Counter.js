// observer: 监控当前组件使用到的由 MobX 跟踪的 observable state, 当状态发生变化时通知 React 更新视图
import { observer } from "mobx-react-lite"
import { useRootStore } from "../../stores/RootStore"
import { autorun, reaction, runInAction } from "mobx"
import { useEffect } from "react"

function Counter() {
  const {counterStore} = useRootStore()
  useEffect(() => {
    /**
     * 接收两个函数作为参数，第一个函数返回要监控的状态，第二个函数用来执行副作用，只有当第一个函数返回的状态发生变化时，第二个函数才会执行
     * 第二个函数输出两个值，当前值和变化前的值
     * 和autorun不同，reaction初始时不会执行副作用。
     */
  	reaction(
      () => counterStore.count,
      (current, previous) => {
        console.log(current)
        console.log(previous)
      }
    )
  }, []) 
  return (
    <div>
      <p className="paragraph">{counterStore.count}</p>
      <button onClick={() => counterStore.increment()} className="button">加 1</button>
      <button onClick={() => counterStore.reset()} className="button">重置</button>
      <p>{counterStore.person.name}</p>
      <button onClick={() => runInAction(() => (counterStore.person.name = "李四"))} className="button">李四</button>
      <button onClick={() => runInAction(() => (counterStore.person = { name: "王五" }))} className="button">王五</button>
    </div>
  )
}

export default observer(Counter)
