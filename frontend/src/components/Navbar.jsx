import { IconButton, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const hoverBg = useColorModeValue("green.600", "green.100");

  return (
    <Container maxW={"1140px"} px={4} py={4}>
      <Flex
        h={{ base: "auto", sm: "16" }}
        alignItems={"center"}
        justifyContent={{ base: "center", sm: "space-between" }}
        flexDir={{
          base: "column",
          sm: "row",
        }}
        gap={{
          base: 4,
          sm: 0,
        }}
      >
        <Text
          fontSize={{
            base: 22,
            sm: 28,
          }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          color={"green.400"}
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>

        <HStack spacing={8} alignItems="center">
          <Link to="/create">
            <IconButton
              aria-label="Create Product"
              bg={"gray.400"}
              _hover={{ bg: hoverBg }}
              _active={{ bg: hoverBg }}
              rounded="full"
            >
              <CiSquarePlus size={24} />
            </IconButton>
          </Link>

          <IconButton
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            bg={"gray.400"}
            _hover={{ bg: hoverBg }}
            _active={{ bg: hoverBg }}
            rounded="full"
          >
            {colorMode === "dark" ? <LuSun size={24} /> : <IoMoon size={24} />}
          </IconButton>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
