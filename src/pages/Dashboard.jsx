import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">TODO Item 1</Heading>
          <Text mt={4}>Description of TODO item 1</Text>
          <Button mt={4} colorScheme="teal">Edit</Button>
          <Button mt={4} colorScheme="red">Delete</Button>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">TODO Item 2</Heading>
          <Text mt={4}>Description of TODO item 2</Text>
          <Button mt={4} colorScheme="teal">Edit</Button>
          <Button mt={4} colorScheme="red">Delete</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;