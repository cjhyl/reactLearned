import { createContext, useContext } from "react";

const countContext = createContext();

function App() {
  return (
    <countContext.Provider value={100}>
      <Foo />
    </countContext.Provider>
  );
}

function Foo () {
  // return (
  //   <countContext.Consumer>
  //     {
  //       value => {
  //         return <div>{value}</div>
  //       }
  //     }
  //   </countContext.Consumer>
  // )
  const count = useContext(countContext);
  return <div>我是Foo组件{count}</div>
}

export default App;
