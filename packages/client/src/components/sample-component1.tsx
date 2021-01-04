import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const SampleComponent1 = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Flex alignItems="flex-start">
        <Text fontWeight="bold" fontSize="4xl">
          Hello, React!
        </Text>
      </Flex>
    </Flex>
  );
};
