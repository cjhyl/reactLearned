import styled from '@emotion/styled'

// const Child = styled.div`
//   color: red;
// `;

// const Parent = styled.div`
//   ${Child} {
//     color: green
//   } 
// `

const Child = styled.div({
  color: 'red'
})

const Parent = styled.div({
  [Child]: {
    color: 'green'
  }
})


function App() {
  return (
    <div>
      <Child>child</Child>
      <Parent>
        <Child>
          child in parent
        </Child>
      </Parent>
    </div>
  );
}

export default App;
