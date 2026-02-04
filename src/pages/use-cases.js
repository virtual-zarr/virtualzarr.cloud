import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Layout } from "@/components";
import { HiArrowRight, HiLightningBolt } from "react-icons/hi";

export default function UseCasesPage() {
  return (
    <Layout
      title="Use Cases"
      description="Real-world examples of Virtual Zarr accelerating scientific data analysis across Earth science disciplines."
    >
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="container.lg">
          <Stack gap={12}>
            {/* Header */}
            <Stack gap={4} textAlign="center">
              <Heading as="h1" size="2xl" color="gray.800">
                Use Cases
              </Heading>
              <Text color="gray.600" maxW="2xl" mx="auto">
                Virtual Zarr enables dramatically faster analysis workflows
                across Earth science disciplines — from air quality to
                oceanography.
              </Text>
            </Stack>

            {/* Featured: TEMPO */}
            <Box
              bg="rgba(227, 75, 117, 0.08)"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              borderWidth="1px"
              borderColor="rgba(227, 75, 117, 0.2)"
            >
              <Stack gap={4}>
                <Badge
                  bg="#e34b75"
                  color="white"
                  w="fit-content"
                  px={2}
                  py={1}
                  borderRadius="md"
                  fontSize="xs"
                >
                  Featured Example
                </Badge>
                <Heading as="h2" size="lg" color="gray.800">
                  TEMPO Air Quality Analysis
                </Heading>
                <Text color="gray.700">
                  The TEMPO instrument measures air pollutants over North
                  America during daylight hours, producing ~10 Level 2 netCDF
                  files and one Level 3 file per hour. A year&apos;s worth of
                  Level 3 data totals ~5,000 files (~2.5 TB).
                </Text>
                <Text color="gray.700">
                  Using the combination of DMR++ parsing, VirtualiZarr, and
                  earthaccess, researchers on the Openscapes JupyterHub were
                  able to virtually open the entire year as granule-level chunk
                  manifests and merge them into a unified datacube.
                </Text>
                <Flex
                  align="center"
                  gap={2}
                  color="#bb1085"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  <HiLightningBolt size={24} />
                  <Text>
                    Full-year analysis in ~10 minutes vs 24+ hours traditionally
                  </Text>
                </Flex>
              </Stack>
            </Box>

            {/* CTA */}
            <Box
              bg="gray.50"
              borderRadius="lg"
              p={6}
              borderWidth="1px"
              borderColor="gray.200"
              textAlign="center"
            >
              <Stack gap={4} align="center">
                <Heading as="h3" size="md" color="gray.700">
                  Try it yourself
                </Heading>
                <Text color="gray.600" maxW="xl">
                  Get started with VirtualiZarr and earthaccess to bring
                  cloud-native workflows to your research.
                </Text>
                <Flex gap={4} flexWrap="wrap" justify="center">
                  <Link
                    href="https://virtualizarr.readthedocs.io"
                    target="_blank"
                    display="flex"
                    alignItems="center"
                    gap={1}
                    color="#e01073"
                    fontWeight="medium"
                    _hover={{ color: "#bb1085" }}
                  >
                    VirtualiZarr Documentation <HiArrowRight />
                  </Link>
                  <Link
                    href="https://earthaccess.readthedocs.io"
                    target="_blank"
                    display="flex"
                    alignItems="center"
                    gap={1}
                    color="#e01073"
                    fontWeight="medium"
                    _hover={{ color: "#bb1085" }}
                  >
                    earthaccess Documentation <HiArrowRight />
                  </Link>
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
}
