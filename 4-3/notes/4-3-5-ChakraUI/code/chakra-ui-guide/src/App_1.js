import React from 'react';
import { 
  Box, 
  Button, 
  useColorMode, 
  Text, 
  useColorModeValue,
  LightMode,
  DarkMode
} from '@chakra-ui/core'

function App() {
  const [colorMode, toggleColorMode] = useColorMode();
  const bgColor = useColorModeValue('tomato', 'skyblue');
  // mb="5" 5=>1.25rem
  return (
    <Box 
      w={['100px','200px','300px','400px']} 
      h='20' 
      bgColor="gray.500"
      mb="5"
      mt="6"
    >
      <Text>当前颜色模式：{colorMode}</Text>
      <LightMode>
        <Button onClick={toggleColorMode}>切换颜色模式</Button>
      </LightMode>
    </Box>
  );
}

export default App;
