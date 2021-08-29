import { useState, memo } from "react";

function App () {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Foo />
    </div>
  )
}

const Foo = memo(function Foo () {
  console.log('Foo组件重新渲染了')
  return (
    <div>
      我是Foo组件
    </div>
  )
})


export default App;
