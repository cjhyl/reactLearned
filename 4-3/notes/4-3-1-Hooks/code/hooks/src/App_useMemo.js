import { useState, useMemo } from "react";

function App () {
  const [count, setCount] = useState(0);
  const [bol, setBol] = useState(true);
  const result = useMemo(() => {
    console.log('useMemo')
    return count * 2
  }, [count, bol])
  return (
    <div>
      <span>{count}x2={result}</span>
      <span>{bol ? '真' : '假'}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setBol(!bol)}>setBol</button>
    </div>
  )
}

export default App;
