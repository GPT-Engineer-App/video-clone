import { Container, VStack, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to YouTube Copy</Heading>
        <Text fontSize="lg">Watch and share your favorite videos</Text>
        <Box boxSize="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/sample-video-thumbnail.jpg" alt="Sample Video Thumbnail" />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid">
                Play
              </Button>
            </Box>
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              Sample Video Title
            </Box>
            <Box>
              1.2M views
            </Box>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;