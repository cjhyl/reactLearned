import { useState, useEffect, useRef } from "react";

// // useRef基本使用
// function App () {
//   const box = useRef();
//   return (
//     <div ref={box}>
//       <button onClick={() => console.log('box',box)}>获取DIV</button>
//     </div>
//   )
// }

function App () {
  const [count, setCount] = useState(0);
  // let timerId = null;//组件重新渲染时，会重新执行此代码
  let timerId = useRef();
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])
  const stopCount = () => {
    // console.log(timerId)
    // clearInterval(timerId)
    console.log(timerId)
    clearInterval(timerId.current)
  }
  return (
    <div>
      {count}
      <button onClick={stopCount}>停止</button>
    </div>
  )
}

export default App;
