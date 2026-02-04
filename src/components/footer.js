import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaGithub, FaSlack } from "react-icons/fa";
import { footerItems } from "@/data/footer-items";

const ListHeader = ({ children }) => (
  <Text fontWeight="bold" mb={2} color="gray.700">
    {children}
  </Text>
);

const FooterLink = ({ href, children }) => {
  const isExternal = href.startsWith("http");
  return (
    <Link
      as={isExternal ? "a" : NextLink}
      href={href}
      target={isExternal ? "_blank" : undefined}
      fontSize="sm"
      color="gray.600"
      _hover={{ color: "#e34b75" }}
    >
      {children}
    </Link>
  );
};

export const Footer = () => {
  return (
    <Box bg="#bb1085" color="white" as="footer">
      <Container maxW="container.lg" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={8}>
          {/* Brand Column */}
          <Stack gap={4}>
            <Text fontSize="lg" fontWeight="bold">
              Virtual Zarr
            </Text>
            <Text fontSize="sm" opacity={0.9}>
              Cloud-optimize your scientific data without copying it.
            </Text>
            <Stack direction="row" gap={2}>
              <IconButton
                as="a"
                href="https://github.com/zarr-developers/VirtualiZarr"
                target="_blank"
                aria-label="GitHub"
                variant="ghost"
                size="sm"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                <FaGithub size={20} />
              </IconButton>
              <IconButton
                as="a"
                href="https://join.slack.com/t/earthmover-community/shared_invite/zt-32to7398i-HorUXmzPzyy9U87yLxweIA"
                target="_blank"
                aria-label="Slack"
                variant="ghost"
                size="sm"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                <FaSlack size={20} />
              </IconButton>
            </Stack>
          </Stack>

          {/* Ecosystem */}
          <Stack gap={2}>
            <Text fontWeight="bold" mb={2}>
              Ecosystem
            </Text>
            {footerItems.ecosystem.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                fontSize="sm"
                color="white"
                opacity={0.9}
                _hover={{ opacity: 1 }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          {/* Community */}
          <Stack gap={2}>
            <Text fontWeight="bold" mb={2}>
              Community
            </Text>
            {footerItems.community.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                fontSize="sm"
                color="white"
                opacity={0.9}
                _hover={{ opacity: 1 }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderColor="whiteAlpha.300" mt={8} pt={8}>
          <Text fontSize="sm" opacity={0.8} textAlign="center">
            © {new Date().getFullYear()} Virtual Zarr Contributors. Apache 2.0
            Licensed.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
