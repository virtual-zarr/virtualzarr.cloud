import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { HiClock, HiDatabase, HiCloud, HiCode } from 'react-icons/hi'

const benefits = [
  {
    icon: HiClock,
    title: 'Faster Processing',
    description:
      'Analyze a year of TEMPO data in 10 minutes instead of hours. Virtual references enable efficient parallel access.',
  },
  {
    icon: HiDatabase,
    title: 'No Data Duplication',
    description:
      'Create virtual datacubes that reference existing files. No need to copy or convert terabytes of archival data.',
  },
  {
    icon: HiCloud,
    title: 'Works with Archives',
    description:
      'Access netCDF, HDF5, and other legacy formats as if they were cloud-optimized Zarr stores.',
  },
  {
    icon: HiCode,
    title: 'Familiar Workflow',
    description:
      'Use the xarray and Python tools you already know. Virtual Zarr integrates seamlessly with your existing code.',
  },
]

const BenefitCard = ({ icon, title, description }) => {
  return (
    <Stack gap={4} align="flex-start">
      <Box
        p={3}
        borderRadius="lg"
        bg="rgba(227, 75, 117, 0.1)"
        color="#e34b75"
      >
        <Icon boxSize={6}>
          {icon({ size: 24 })}
        </Icon>
      </Box>
      <Stack gap={2}>
        <Heading as="h3" size="md" color="gray.800">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>
      </Stack>
    </Stack>
  )
}

export const Benefits = () => {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="gray.50">
      <Container maxW="container.lg">
        <Stack gap={12}>
          <Stack gap={4} textAlign="center">
            <Heading as="h2" size="xl" color="gray.800">
              Why Virtual Zarr?
            </Heading>
            <Text color="gray.600" maxW="2xl" mx="auto">
              Unlock cloud-native performance for your legacy scientific data
              without the hassle of data migration.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8}>
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}
