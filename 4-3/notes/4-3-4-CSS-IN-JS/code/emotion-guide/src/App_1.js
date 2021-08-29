import styled from '@emotion/styled'

function Demo ({className}) {
  return <div className={className}>Demo</div>
}

// const Fancy = styled(Demo)`
// color: red;
// `

const Fancy = styled(Demo)({
  color: 'black',
  background:'#f00'
})

function App() {
  return (
    <div>
      <Fancy />
    </div>
  );
}

export default App;
