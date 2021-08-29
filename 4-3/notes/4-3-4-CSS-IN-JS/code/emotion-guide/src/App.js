import { css, useTheme } from "@emotion/react";

const redColor = props => css`
  color: ${props.colors.red}
`

function App() {
  console.log(useTheme());
  const theme = useTheme();
  return (
    // <div css={redColor}>App Works</div>
    <div css={{color:theme.colors.green}}>App Works</div>
  );
}

export default App;
