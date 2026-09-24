import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import {
  ecosystemProjects,
  builtinFormats,
  communityParsers,
} from "@/data/ecosystem";

const EcosystemCard = ({ project }) => {
  return (
    <Card.Root
      borderWidth="1px"
      borderColor="gray.200"
      _hover={{ borderColor: "#e34b75", shadow: "md" }}
      transition="all 0.2s"
    >
      <Card.Body>
        <Stack gap={4}>
          <Heading as="h3" size="md" color="gray.800">
            {project.name}
          </Heading>
          <Text color="gray.600" fontSize="sm">
            {project.description}
          </Text>
          <Stack direction="row" gap={4} pt={2}>
            <Link
              href={project.href}
              target="_blank"
              fontSize="sm"
              fontWeight="medium"
              color="#e01073"
              display="flex"
              alignItems="center"
              gap={1}
              _hover={{ color: "#bb1085" }}
            >
              Documentation <HiExternalLink />
            </Link>
            <Link
              href={project.github}
              target="_blank"
              fontSize="sm"
              fontWeight="medium"
              color="gray.500"
              display="flex"
              alignItems="center"
              gap={1}
              _hover={{ color: "gray.700" }}
            >
              <FaGithub /> GitHub
            </Link>
          </Stack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export const EcosystemCards = () => {
  return (
    <Box as="section" id="ecosystem" py={{ base: 12, md: 20 }}>
      <Container maxW="container.lg">
        <Stack gap={8}>
          <Stack gap={4} textAlign="center">
            <Heading as="h2" size="xl" color="gray.800">
              The Ecosystem
            </Heading>
            <Text color="gray.600" maxW="2xl" mx="auto">
              Tools that bring cloud-native workflows to the archives you
              already have.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {ecosystemProjects.map((project) => (
              <EcosystemCard key={project.name} project={project} />
            ))}
          </SimpleGrid>

          <Stack gap={3} textAlign="center">
            <Heading as="h3" size="md" color="gray.800">
              One protocol, any format
            </Heading>
            <Text color="gray.600" fontSize="sm" maxW="2xl" mx="auto">
              VirtualiZarr parses {builtinFormats.join(", ")} out of the box.
              Community parsers cover the rest:
            </Text>
            <Flex wrap="wrap" justify="center" gap={2} pt={1}>
              {communityParsers.map((parser) => (
                <Link
                  key={parser.name}
                  href={parser.url}
                  target="_blank"
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontSize="sm"
                  _hover={{ borderColor: "#e34b75" }}
                  transition="all 0.2s"
                >
                  <Text as="span" fontWeight="medium" color="gray.700">
                    {parser.format}
                  </Text>{" "}
                  <Text as="span" color="#e01073">
                    {parser.name}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Stack>

          <Text
            color="gray.600"
            fontSize="sm"
            textAlign="center"
            maxW="2xl"
            mx="auto"
          >
            Working with NASA data?{" "}
            <Link
              href="https://earthaccess.readthedocs.io"
              target="_blank"
              color="#e01073"
              fontWeight="medium"
              _hover={{ color: "#bb1085" }}
            >
              earthaccess
            </Link>{" "}
            covers search, Earthdata Login, and per-DAAC S3 credentials.{" "}
            <Link
              href="https://earthaccess-auth.readthedocs.io"
              target="_blank"
              color="#e01073"
              fontWeight="medium"
              _hover={{ color: "#bb1085" }}
            >
              earthaccess-auth
            </Link>{" "}
            packages just the login and credential half for services that need
            nothing else.
          </Text>

          <Box display="flex" justifyContent="center">
            <Image
              src="/images/VirtualZarrPathways.svg"
              alt="Paths from netCDF, GRIB, and TIFF files through Icechunk virtual stores to Xarray, a STAC catalog, QGIS, and a map UI"
              w="80%"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
