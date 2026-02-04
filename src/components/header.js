import { menuItems } from "@/data/menu-items";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavLink = ({ href, children }) => {
  const isExternal = href.startsWith("http");
  return (
    <Link
      as={isExternal ? "a" : NextLink}
      href={href}
      target={isExternal ? "_blank" : undefined}
      p={2}
      fontSize="sm"
      fontWeight="600"
      color="gray.600"
      _hover={{
        textDecoration: "none",
        color: "#e34b75",
      }}
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Flex
        as="header"
        position="fixed"
        top="0"
        w="full"
        minH="60px"
        boxShadow="0 2px 8px rgba(187, 16, 133, 0.1)"
        zIndex="999"
        justify="center"
        bg="rgba(255, 255, 255, 0.95)"
        backdropFilter="saturate(180%) blur(5px)"
      >
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between" h="60px">
            {/* Logo */}
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
              <Flex align="center" gap={2}>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  background="linear-gradient(135deg, #e34b75, #bb1085)"
                  backgroundClip="text"
                  color="transparent"
                >
                  Virtual Zarr
                </Text>
              </Flex>
            </Link>

            {/* Desktop Nav */}
            <Stack
              direction="row"
              gap={4}
              display={{ base: "none", md: "flex" }}
            >
              {menuItems.map((item) => (
                <NavLink key={item.label} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              aria-label="Toggle navigation"
              color="gray.600"
              _hover={{ color: "#e34b75" }}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </IconButton>
          </Flex>
        </Container>
      </Flex>

      {/* Mobile Nav */}
      {isOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          position="fixed"
          top="60px"
          left="0"
          right="0"
          bg="white"
          boxShadow="md"
          zIndex="998"
          p={4}
        >
          <Stack gap={2}>
            {menuItems.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
