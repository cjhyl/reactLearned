import { css, keyframes } from '@emotion/react';

const move = keyframes`
  0% {
    background: #f00;
    left: 0;
    top: 0;
  }
  100% {
    background: #00f;
    left: 600px;
    top: 300px;
  }
`

const styles = css`
  body {
    margin:0;
  }
  a {
    text-decoration: none;
    color: red;
  }
`
const box = css`
  width: 100px;
  height: 100px;
  position: absolute;
  animation: ${move} 2s ease infinite alternate;
`

function App() {
  return (
    <div css={box}>App Works</div>
  );
}

export default App;
