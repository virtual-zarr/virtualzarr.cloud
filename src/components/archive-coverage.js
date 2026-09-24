import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";

const stats = [
  {
    value: "86",
    label:
      "major NASA collections graded by opening granule files, not catalog metadata",
  },
  {
    value: "65%",
    label:
      "of the 11.6 measured petabytes is virtualizable today, without copying a byte",
  },
  {
    value: "8",
    label:
      "collections are unreadable only because of reader gaps — fixable in software, not archives",
  },
];

const assessments = [
  {
    name: "EarthDataVirtualizabilityScore",
    description: "the graded benchmark",
    url: "https://github.com/alex-s-gardner/EarthDataVirtualizabilityScore",
  },
  {
    name: "virtual-zarr-coverage",
    description: "tracking coverage across CMR as VirtualiZarr evolves",
    url: "https://github.com/NASA-IMPACT/virtual-zarr-coverage",
  },
];

export const ArchiveCoverage = () => {
  return (
    <Box as="section" id="coverage" py={{ base: 12, md: 20 }}>
      <Container maxW="container.lg">
        <Stack gap={10}>
          <Stack gap={4} textAlign="center">
            <Heading as="h2" size="xl" color="gray.800">
              How much of the archive is virtualizable?
            </Heading>
            <Text color="gray.600" maxW="2xl" mx="auto">
              Whether an archive can be opened as one virtual datacube is
              decided at write time — by chunk shapes, grids, and fill values
              chosen inside production systems. Two independent efforts are
              measuring where NASA&apos;s archives stand.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {stats.map((stat) => (
              <Stack key={stat.value} gap={2} textAlign="center">
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  color="#e01073"
                  lineHeight="1"
                >
                  {stat.value}
                </Text>
                <Text fontSize="sm" color="gray.600" maxW="xs" mx="auto">
                  {stat.label}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>

          <Text fontSize="sm" color="gray.500" textAlign="center">
            Measured September 2026 with VirtualiZarr&apos;s own parsers:{" "}
            {assessments.map((a, i) => (
              <span key={a.name}>
                <Link
                  href={a.url}
                  target="_blank"
                  color="#e01073"
                  fontWeight="medium"
                  display="inline-flex"
                  alignItems="center"
                  gap={1}
                  _hover={{ color: "#bb1085" }}
                >
                  {a.name} <HiExternalLink />
                </Link>{" "}
                ({a.description}){i < assessments.length - 1 ? " and " : "."}
              </span>
            ))}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
