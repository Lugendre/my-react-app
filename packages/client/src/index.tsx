import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SubComponent } from './sub-component';
import { ChakraProvider, Flex, Text, Badge, Grid } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider resetCSS>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex alignItems="flex-start">
          <Text fontWeight="bold" fontSize="4xl">
            Hello, React!
          </Text>
          <Badge variant="subtle">beta</Badge>
        </Flex>
      </Flex>
      <SubComponent name="My Counter for TypeScript" />
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
