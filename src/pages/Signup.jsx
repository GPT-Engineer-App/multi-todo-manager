import { Box, Button, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading mb={6}>Sign Up</Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="teal" width="full">Sign Up</Button>
    </Box>
  );
};

export default Signup;