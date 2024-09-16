import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';

export default function LandingPage() {
  return (
    <ChakraProvider>
      <Flex
        as="nav"
        bg="teal.500"
        color="white"
        p={4}
        align="center"
        justify="space-between"
      >
        <Heading size="lg">MyApp</Heading>
        <Spacer />
        <Flex>
          <Button variant="link" color="white" mr={4}>
            Home
          </Button>
          <Button variant="link" color="white" mr={4}>
            About
          </Button>
          <Button variant="link" color="white">
            Contact
          </Button>
        </Flex>
      </Flex>
      {/* Add your page content here */}
    </ChakraProvider>
  );
}
