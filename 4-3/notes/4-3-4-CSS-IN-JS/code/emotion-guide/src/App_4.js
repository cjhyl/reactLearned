import { css } from '@emotion/react';

const base = css`
  background: #00f;
  color: #fff
`;

const danger = css`
  background: #000;
  color: #f00
`


function App() {
  return (
    <div css={[base,danger]}>App Works</div>
  );
}

export default App;
