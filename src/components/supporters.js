import { Box, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { supporters } from "@/data/supporters";

export const Supporters = () => {
  return (
    <Box as="section" id="supporters" py={{ base: 12, md: 20 }} bg="gray.50">
      <Container maxW="container.lg">
        <Stack gap={6}>
          <Stack gap={4} textAlign="center">
            <Heading as="h2" size="xl" color="gray.800">
              Contributors
            </Heading>
            <Text color="gray.700">
              Virtual Zarr is made possible by{" "}
              {supporters.map((supporter, index) => (
                <span key={supporter.name}>
                  <Link
                    href={supporter.url}
                    target="_blank"
                    color="#e01073"
                    _hover={{ color: "#bb1085" }}
                  >
                    {supporter.name}
                  </Link>
                  {index < supporters.length - 1 ? ", " : ", "}
                </span>
              ))}
              and the Data Systems Evolution team at{" "}
              <Link
                href="https://www.nasa.gov/marshall"
                target="_blank"
                color="#e01073"
                _hover={{ color: "#bb1085" }}
              >
                NASA Marshall Space Flight Center
              </Link>
              .
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
