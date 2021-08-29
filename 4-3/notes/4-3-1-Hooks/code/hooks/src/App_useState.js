import { useState } from "react";

function App() {
  // 1. 接收唯⼀的参数即状态初始值. 初始值可以是任意数据类型.
  // 2. 返回值为数组. 数组中存储状态值和更改状态值的⽅法. ⽅法名称约定以set开头, 后⾯加上状态名称.
  // 4. 参数可以是⼀个函数, 函数返回什么, 初始状态就是什么, 函数只会被调⽤⼀次, ⽤在初始值是动态值的情况.
  /**
   * 如const myCount = props.count||0,在函数组件中直接使用的话，会导致每次刷新组件数值都会重置。
   * 而在useState的函数参数中返回的话，只会调用一次。
   */
  const [count, setCount] = useState(() => 100);
  // 3. ⽅法可以被调⽤多次. ⽤以保存不同状态值.
  const [person, setPerson] = useState({name:'张三',age:20})

  function handleCount () {
    // 设置状态值⽅法的参数可以是⼀个值也可以是⼀个函数
    // setCount(()=>{
    //   return 100
    // })
    setCount(count=>{
      return count + 1
    })
    // 设置状态值⽅法的⽅法本身是异步的，此次打印的值会是改变之前的值
    console.log('count',count)
  }
  return (
    <div>
      <span>{count} {person.name} {person.age}</span>
      <button onClick={handleCount}>+1</button>
      {/* <button onClick={() => setPerson({name:'李四',age:30})}>setPerson</button> */}
      {/* 下面这种方式会没有age，因为对象数据会覆盖 */}
      {/* <button onClick={() => setPerson({name:'李四'})}>setPerson</button> */}
      {/* 想要只改name，不改age，应该使用...person将原数据解构 */}
      <button onClick={() => setPerson({...person,name:'李四'})}>setPerson</button>
    </div>
  );
}

export default App;
