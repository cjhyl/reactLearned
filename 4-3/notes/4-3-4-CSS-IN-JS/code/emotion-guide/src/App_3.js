import styled from '@emotion/styled'

const Container = styled.div`
  width: 200px;
  height: 200px;
  background: #00f;
  &:hover {
    background: #f0f;
  }
  & > span {
    color: #ff0;
  }
`;


function App() {
  return (
    <div>
      <Container as="a" href="#" >container<span>span</span></Container>
    </div>
  );
}

export default App;
