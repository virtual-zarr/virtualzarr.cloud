import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Layout } from "@/components";
import { HiArrowRight, HiExternalLink, HiLightningBolt } from "react-icons/hi";
import { useCases } from "@/data/use-cases";

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
                Virtual Zarr enables dramatically faster analysis workflows —
                from air quality to oceanography to disciplines well beyond
                Earth science.
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

            {/* In the wild */}
            <Stack gap={6}>
              <Stack gap={3} textAlign="center">
                <Heading as="h2" size="lg" color="gray.800">
                  In the wild
                </Heading>
                <Text color="gray.600" maxW="2xl" mx="auto">
                  Production pipelines, living stores, and integrations built on
                  virtual Zarr — from NASA DAACs to the ESGF to single-cell
                  biology.
                </Text>
              </Stack>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                {useCases.map((useCase) => (
                  <Box
                    key={useCase.name}
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="lg"
                    p={5}
                    _hover={{ borderColor: "#e34b75", shadow: "sm" }}
                    transition="all 0.2s"
                  >
                    <Stack gap={3}>
                      <Badge
                        colorPalette="gray"
                        w="fit-content"
                        fontSize="xs"
                        variant="subtle"
                      >
                        {useCase.tag}
                      </Badge>
                      <Heading as="h3" size="sm" color="gray.800">
                        {useCase.name}
                      </Heading>
                      <Text color="gray.600" fontSize="sm">
                        {useCase.description}
                      </Text>
                      <Link
                        href={useCase.url}
                        target="_blank"
                        fontSize="sm"
                        fontWeight="medium"
                        color="#e01073"
                        display="flex"
                        alignItems="center"
                        gap={1}
                        _hover={{ color: "#bb1085" }}
                      >
                        Learn more <HiExternalLink />
                      </Link>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>

            {/* Marketplace */}
            <Box
              bg="gray.50"
              borderRadius="lg"
              p={6}
              borderWidth="1px"
              borderColor="gray.200"
            >
              <Stack gap={2}>
                <Heading as="h3" size="md" color="gray.800">
                  Virtual datasets, productized
                </Heading>
                <Text color="gray.600">
                  The{" "}
                  <Link
                    href="https://app.earthmover.io/marketplace?search=virtual"
                    target="_blank"
                    color="#e01073"
                    fontWeight="medium"
                    _hover={{ color: "#bb1085" }}
                  >
                    Earthmover Data Marketplace
                  </Link>{" "}
                  serves analysis-ready datacubes in the open Icechunk format —
                  including virtual datasets built over existing netCDF, HDF5,
                  GRIB, and TIFF archives.
                </Text>
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
