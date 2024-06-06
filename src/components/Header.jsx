import { Box, Flex, IconButton, Input, InputGroup, InputRightElement, Spacer, Image } from "@chakra-ui/react";
import { FaBars, FaSearch, FaMicrophone, FaVideo, FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="black" color="white" px={4} py={2}>
      <Flex align="center">
        <IconButton
          icon={<FaBars />}
          variant="ghost"
          aria-label="Menu"
          color="white"
          _hover={{ bg: "gray.700" }}
        />
        <Image src="/images/youtube-logo.png" alt="YouTube Logo" boxSize="40px" ml={2} />
        <Spacer />
        <InputGroup maxW="600px" mx={4}>
          <Input placeholder="Search" bg="gray.800" border="none" borderRadius="full" color="white" />
          <InputRightElement>
            <IconButton
              icon={<FaSearch />}
              variant="ghost"
              aria-label="Search"
              color="white"
              _hover={{ bg: "gray.700" }}
            />
          </InputRightElement>
        </InputGroup>
        <IconButton
          icon={<FaMicrophone />}
          variant="ghost"
          aria-label="Microphone"
          color="white"
          _hover={{ bg: "gray.700" }}
          mx={2}
        />
        <Spacer />
        <IconButton
          icon={<FaVideo />}
          variant="ghost"
          aria-label="Create Content"
          color="white"
          _hover={{ bg: "gray.700" }}
          mx={2}
        />
        <IconButton
          icon={<FaBell />}
          variant="ghost"
          aria-label="Notifications"
          color="white"
          _hover={{ bg: "gray.700" }}
          mx={2}
        />
        <IconButton
          icon={<FaUserCircle />}
          variant="ghost"
          aria-label="User Profile"
          color="white"
          _hover={{ bg: "gray.700" }}
          mx={2}
        />
      </Flex>
    </Box>
  );
};

export default Header;