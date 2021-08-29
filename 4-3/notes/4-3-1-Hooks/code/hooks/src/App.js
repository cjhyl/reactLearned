import ReactDOM from 'react-dom';

let state = [];
let setters = [];
let stateIndex = 0;

function createSetter (index) {
  return function (newState) {
    state[index] = newState;
    render();
  }
}

function useState (initState) {
  state[stateIndex] = state[stateIndex] ?  state[stateIndex] : initState;
  setters.push(createSetter(stateIndex));
  let value = state[stateIndex];
  let setter = setters[stateIndex];
  stateIndex++;
  return [value, setter]
}

function render () {
  stateIndex = 0;
  effectIndex = 0;
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

// 上次依赖值
let prevDepsAry = [];
let effectIndex = 0;

function useEffect(callback, depsAry) {
  // 判断callback是不是函数
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new Error('useEffect函数第一个参数必须是函数')
  }
  
  // 判断depsAry有没有被传递
  if (typeof depsAry === 'undefined') {
    // 没有传递
    callback()
  } else {
    // 判断depsAry是不是数组
    if (Object.prototype.toString.call(depsAry) !== '[object Array]') {
      throw new Error('useEffect函数第二个参数必须是数组')
    }
    // 获取上一次的状态值
    let prevDeps = prevDepsAry[effectIndex]
    // 对比当前和上次的依赖值
    let hasChanged = prevDeps ? depsAry.every((dep, index) => dep === prevDeps[index]) === false : true
    // 有变化，直接callback
    if (hasChanged) {
      callback();
    }
    // 同步依赖值
    prevDepsAry[effectIndex] = depsAry;
    effectIndex++;
  }
}

function useReducer (reducer, initState) {
  const [state, setState] = useState(initState)
  function dispatch (action) {
    const newState = reducer(state, action)
    setState(newState)
  }
  return [state, dispatch];
}

function App () {
  // const [count, setCount] =useState(0)
  // const [name, setName] =useState('张三')
  // useEffect(() => {
  //   console.log('hello')
  // },[count])
  // useEffect(() => {
  //   console.log('world')
  // },[name])
  function reducer (state, action) {
    switch (action.type) {
      case 'increment':
        return state +1;
      case 'decrement':
        return state -1;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      {/* {count}
      <button onClick={() => setCount(count+1)}>+1</button>
      {name}
      <button onClick={() => setName('李四')}>setName</button> */}
      {count}
      <button onClick={() => dispatch({type: 'increment'})}>+1</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
    </div>
  )
}

export default App;
