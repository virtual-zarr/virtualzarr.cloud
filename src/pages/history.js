import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Layout } from "@/components";

export default function HistoryPage() {
  return (
    <Layout
      title="History"
      description="The history of data virtualization in scientific computing - coming March 2026."
    >
      <Box py={{ base: 20, md: 32 }}>
        <Container maxW="container.md">
          <Stack gap={6} textAlign="center">
            <Heading as="h1" size="2xl" color="gray.800">
              A History of Virtualization
            </Heading>

            <Text color="gray.600" fontSize="lg" maxW="xl" mx="auto">
              Virtual Zarr didn&apos;t emerge from a vacuum. It builds on
              decades of work in scientific data formats, remote data access,
              and computer science fundamentals.
            </Text>

            <Text color="gray.600" fontSize="lg" maxW="xl" mx="auto">
              Pioneers include those working on OPeNDAP, NetCDF/HDF, Kerchunk,
              fsspec, and more.
            </Text>

            <Box
              bg="rgba(227, 75, 117, 0.08)"
              borderRadius="lg"
              p={6}
              mt={4}
              maxW="md"
              mx="auto"
            >
              <Text color="gray.700" fontWeight="medium">
                We&apos;re working on writing down this history and hope
                you&apos;ll come back to read the full story in March 2026.
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
}
