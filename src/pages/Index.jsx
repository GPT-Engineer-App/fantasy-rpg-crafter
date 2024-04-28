// Simple single-player fantasy RPG with crafting and building mechanics
import { Box, Button, Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import { FaHammer, FaTree, FaHome, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Fantasy RPG Adventure
          </Text>
          <Image src="https://images.unsplash.com/photo-1550100136-e092101726f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbGFuZHNjYXBlfGVufDB8fHx8MTcxNDMwNjEyN3ww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="md" />
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Button leftIcon={<FaHammer />} colorScheme="purple" variant="solid">
              Craft Weapons
            </Button>
            <Button leftIcon={<FaTree />} colorScheme="green" variant="solid">
              Gather Resources
            </Button>
            <Button leftIcon={<FaHome />} colorScheme="teal" variant="solid">
              Build Structures
            </Button>
            <Button leftIcon={<FaShieldAlt />} colorScheme="red" variant="solid">
              Fight Monsters
            </Button>
          </Grid>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
