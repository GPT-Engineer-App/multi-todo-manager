import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            TODO App
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/dashboard" color="white" mr={4}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/login" color="white" mr={4}>
            Login
          </Link>
          <Link as={RouterLink} to="/signup" color="white" mr={4}>
            Sign Up
          </Link>
          <Button colorScheme="teal" variant="outline">
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;