import * as React from 'react';
import { SampleComponent1, SampleComponent2 } from '../components';
import { ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  return (
    <ChakraProvider resetCSS>
      <SampleComponent1 />
      <SampleComponent2 name="My Counter for TypeScript" />
    </ChakraProvider>
  );
};
