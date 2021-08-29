import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

// function App() {

//   const [count, setCount] = useState(0);
//   // componentDidMount, componentDidUpdate
//   // useEffect(() => {
//   //   console.log('123',count)
//   // })

//   // componentDidMount
//   useEffect(() => {
//     console.log('123',count)
//   },[])

//   // componentWillUnMount
//   useEffect(() => {
//     return () =>{
//       console.log('组件卸载')
//     }
//   })

//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>卸载组件</button>
//     </div>
//   );
// }

// // 1. 为window对象添加滚动事件
// // 2. 设置定时器让count数值每隔⼀秒增加1
// function App() {
//   function onScroll () {
//     console.log('页面滚动了')
//   }

//   useEffect(() => {
//     window.addEventListener('scroll',onScroll)
//     return () => {
//       window.removeEventListener('scroll',onScroll)
//     }
//   },[])

//   const [count, setCount] = useState(0);
//   /**
//    * useEffect可调用多次，这样有以下好处：
//    * 1. 按照⽤途将代码进⾏分类 (将⼀组相⼲的业务逻辑归置到了同⼀个副作⽤函数中)
//    * 2. 简化重复代码, 使组件内部代码更加清晰
//    */
//   // 
//   useEffect(() => {
//     let timerId = setInterval(() => {
//       setCount(count => {
//         console.log(count +1)
//         return count +1
//       })
//     }, 1000);
//     return () => {
//       clearInterval(timerId)
//     }
//   },[])

//   return (
//     <div>
//       {count}
//       <button onClick={() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>卸载组件</button>
//     </div>
//   )
// }

// // 4. 只有指定数据发⽣变化时触发effect
// function App() {
//   const [count, setCount] = useState(0);
//   const [person, setPerson] = useState({name:'张三'});
//   /**
//    * 第二个参数
//    * 没有第二个参数时，所有数据更新，都会执行
//    * 为空数组时，组件数据更新时无效，不执行
//    * 数组有内容时，数组内容代表的数值更新时，才会执行
//    */
//   // 第二个参数，有内容时，只有内容内
//   useEffect(() => {
//     console.log('count',count);
//     console.log('name',person.name);
//   },[count])
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setPerson({name:'李四'})}>setPerson</button>
//     </div>
//   )
// }

// useEffect中使用异步函数
function App () {
  // 这种方式会报错，因为useEffect中return function是作为组件销毁钩子用的，而async会把函数的返回变成一个Promise
  // useEffect(async () => {
  //   let result = await getData();
  //   console.log('result',result)
  // }, [])
  // 正确的方式
  useEffect(() => {
    (async () => {
      let result = await getData();
      console.log('result',result)
    })()
  }, [])
  return (
    <div>hooks</div>
  )
}

function getData () {
  return new Promise(resolve => {
    resolve({msg: 'Hello'})
  })
}

export default App;
