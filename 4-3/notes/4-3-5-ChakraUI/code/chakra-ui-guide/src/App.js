import React from 'react';
import { chakra } from '@chakra-ui/core'

const MyButton = chakra('button', {
  themeKey: 'MyButton'
});

function App() {
  return (
    <div>
      <MyButton>自定义按钮</MyButton>
      <MyButton size="md" variant="danger">自定义按钮风格改变</MyButton>
    </div>
  );
}

export default App;