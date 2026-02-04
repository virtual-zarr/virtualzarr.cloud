import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Layout } from '@/components'
import { newsArticles } from '@/data/news'
import { HiExternalLink } from 'react-icons/hi'

const NewsCard = ({ article }) => {
  return (
    <Card.Root
      as={Link}
      href={article.url}
      target="_blank"
      borderWidth="1px"
      borderColor="gray.200"
      _hover={{ borderColor: '#e34b75', shadow: 'md', textDecoration: 'none' }}
      transition="all 0.2s"
    >
      <Card.Body>
        <Stack gap={4}>
          <Flex justify="space-between" align="flex-start">
            <Text fontSize="xs" color="gray.500" fontWeight="medium">
              {article.source}
            </Text>
            <Text fontSize="xs" color="gray.400">
              {article.date}
            </Text>
          </Flex>

          <Heading as="h3" size="md" color="gray.800">
            {article.title}
          </Heading>

          <Text color="gray.600" fontSize="sm">
            {article.description}
          </Text>

          <Flex
            align="center"
            gap={1}
            color="#e01073"
            fontSize="sm"
            fontWeight="medium"
          >
            Read article <HiExternalLink />
          </Flex>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}

export default function NewsPage() {
  return (
    <Layout
      title="News"
      description="Latest news and articles about Virtual Zarr, VirtualiZarr, Icechunk, and the cloud-native geospatial ecosystem."
    >
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="container.lg">
          <Stack gap={12}>
            {/* Header */}
            <Stack gap={4} textAlign="center">
              <Heading as="h1" size="2xl" color="gray.800">
                News
              </Heading>
              <Text color="gray.600" maxW="2xl" mx="auto">
                Latest articles and announcements about Virtual Zarr and the
                cloud-native geospatial ecosystem.
              </Text>
            </Stack>

            {/* Articles */}
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              {newsArticles.map((article) => (
                <NewsCard key={article.url} article={article} />
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Layout>
  )
}
