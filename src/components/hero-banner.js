import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export const HeroBanner = () => {
  return (
    <Box
      background="linear-gradient(135deg, #e58077 0%, #e57a77 16.66%, #e46876 33.33%, #e34b75 50%, #e12374 66.66%, #e01073 83.33%, #bb1085 100%)"
      color="white"
      py={{ base: 16, md: 24 }}
    >
      <Container maxW="container.lg">
        <Stack gap={6} align="center" textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Cloud-optimize your scientific data
            <br />
            <Text as="span" opacity={0.9}>
              without copying it
            </Text>
          </Heading>

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="2xl"
            opacity={0.95}
          >
            Virtual Zarr enables performant, cloud-optimized access to archival
            data formats like netCDF and HDF5 — without duplicating any data.
          </Text>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            gap={4}
            pt={4}
          >
            <Button
              as="a"
              href="https://virtualizarr.readthedocs.io"
              target="_blank"
              size="lg"
              bg="white"
              color="#e34b75"
              fontWeight="600"
              _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              Get Started
            </Button>
            <Button
              as={NextLink}
              href="/use-cases"
              size="lg"
              variant="outline"
              borderColor="white"
              borderWidth="2px"
              color="white"
              fontWeight="600"
              _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              See Use Cases
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
