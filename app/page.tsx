import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

const Invitation = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgGradient="linear(to-br, purple.600, pink.500, orange.400)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pos="relative"
      overflow="hidden"
    >
      {/* Półprzezroczysta nakładka dla lepszego kontrastu */}
      <Box
        pos="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.3)"
        zIndex={1}
      />
      <VStack
        p={10}
        bg="whiteAlpha.900"
        borderRadius="xl"
        boxShadow="2xl"
        zIndex={2}
      >
        <Heading as="h1" size="2xl" color="gray.800">
          Stwórz swoje CV
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Dołącz do naszej platformy i wyróżnij się na rynku pracy dzięki profesjonalnie przygotowanemu CV.
        </Text>
        <Button
          // rightIcon={<ArrowForwardIcon />}
          colorScheme="pink"
          size="lg"
          // onClick={() => router.push("/create-cv")}
          _hover={{ transform: "scale(1.05)", bg: "pink.400" }}
          transition="all 0.2s"
        >
          Rozpocznij teraz
        </Button>
      </VStack>
    </Box>
  );
};

export default Invitation;
