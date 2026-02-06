import {
  Box,
  Card,
  Container,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { ecosystemProjects } from "@/data/ecosystem";

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
              Powerful tools working together to bring cloud-native
              workflows to your existing data archives.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {ecosystemProjects.map((project) => (
              <EcosystemCard key={project.name} project={project} />
            ))}
          </SimpleGrid>

          <Box display="flex" justifyContent="center">
            <Image
              src="/images/VirtualZarrPathways.svg"
              alt="Virtual Zarr Pathways - showing how VirtualiZarr, Icechunk, and earthaccess work together"
              w="80%"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
