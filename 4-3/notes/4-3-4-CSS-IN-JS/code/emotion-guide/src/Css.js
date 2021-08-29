import { css } from "@emotion/react";

const style = css`
  width: 200px;
  height: 200px;
  background: #ff0;
`

function Css (props) {
  return (
    <div css={style} {...props}>Css</div>
  )
}

export default Css;