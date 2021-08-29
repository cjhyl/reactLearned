import { css } from "@emotion/react";
import styled from '@emotion/styled'

import Css from './Css'

// const style = css({
//   width: 100,
//   height: 100,
//   background: '#ffff00'
// })

const style = css`
  width: 100px;
  height: 100px;
  background: #f00
`;

const Button = styled.button`
  border:1px #ddd solid;
  outline:none;
  border-radius: 5px;
  min-height:32px;
  background: ${props => props.bgColor || 'white'};
`

// const Container = styled.div(props => ({
//   width: props.w || 500,
//   background: '#f0f',
//   margin: '0 auto'
// }))

const Container = styled.div({
  width: 500,
  background: '#f0f',
  margin: '0 auto'
},props => ({
  width: props.w,
  background: props.bgColor
}))

console.log('style', style)

function App() {
  return (
    <div>
      App Works
      <Css css={style} />
      <Container w={200}>
        <Button bgColor={'#f00'}>样式化组件</Button>
      </Container>
      
    </div>
  );
}

export default App;
