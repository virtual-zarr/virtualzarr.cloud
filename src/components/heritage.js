import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

const foundationalProjects = [
  {
    name: 'OPeNDAP',
    description: 'Pioneered remote data access and the DMR++ metadata format',
  },
  {
    name: 'HDF Group',
    description: 'Chunk-level access and the foundations of scientific data storage',
  },
  {
    name: 'Kerchunk',
    description: 'Originated the concept of virtual Zarr references',
  },
  {
    name: 'fsspec',
    description: 'Python filesystem abstraction enabling cloud-native access',
  },
]

export const Heritage = () => {
  return (
    <Box as="section" py={{ base: 12, md: 20 }}>
      <Container maxW="container.lg">
        <Stack gap={8}>
          <Stack gap={4} textAlign="center">
            <Heading as="h2" size="xl" color="gray.800">
              Standing on the Shoulders of Giants
            </Heading>
            <Text color="gray.600" maxW="2xl" mx="auto">
              Virtual Zarr builds on decades of work in scientific data formats,
              remote data access, and computer science fundamentals.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
            {foundationalProjects.map((project) => (
              <Stack key={project.name} gap={2} textAlign="center">
                <Text fontWeight="bold" color="gray.800">
                  {project.name}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {project.description}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>

          <Flex justify="center">
            <Link
              as={NextLink}
              href="/history"
              display="flex"
              alignItems="center"
              gap={1}
              color="#e01073"
              fontWeight="medium"
              _hover={{ color: '#bb1085' }}
            >
              Full history coming March 2026 <HiArrowRight />
            </Link>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}
