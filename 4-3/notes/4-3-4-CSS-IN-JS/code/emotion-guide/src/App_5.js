import { css, Global } from '@emotion/react';
import Demo from './demo'

const styles = css`
  body {
    margin:0;
  }
  a {
    text-decoration: none;
    color: red;
  }
`

function App() {
  return (
    <div >
      {/* 引入全局样式 */}
      <Global styles={styles} />
      <a>a标签</a>
      <Demo />
    </div>
  );
}

export default App;
