import { Box, Button, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading mb={6}>Login</Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="teal" width="full">Login</Button>
    </Box>
  );
};

export default Login;