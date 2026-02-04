import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Layout } from "@/components";
import { TeamMember } from "@/components/team-member";
import {
  virtualizarrMaintainers,
  icechunkCoreDevelopers,
  earthaccessIntegrationTeam,
} from "@/data/team-members";
import { supporters } from "@/data/supporters";

export default function TeamPage() {
  return (
    <Layout
      title="Team"
      description="Meet the people behind Virtual Zarr - a collaboration between industry, government, academia, and open source developers."
    >
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="container.lg">
          <Stack gap={12}>
            {/* Header */}
            <Stack gap={4} textAlign="center">
              <Heading as="h1" size="2xl" color="gray.800">
                Team
              </Heading>
              <Text color="gray.600" maxW="2xl" mx="auto">
                Virtual Zarr is enabled through collaboration across industry,
                government, academia, non-profits, and individual open source
                developers.
              </Text>
            </Stack>

            {/* Community */}
            <Stack gap={6}>
              <Heading as="h2" size="lg" color="gray.700">
                Community
              </Heading>
              <Text color="gray.700">
                Virtual Zarr is made possible by{" "}
                {supporters.map((supporter, index) => (
                  <span key={supporter.name}>
                    <Link
                      href={supporter.url}
                      target="_blank"
                      color="#e01073"
                      _hover={{ color: "#bb1085" }}
                    >
                      {supporter.name}
                    </Link>
                    {index < supporters.length - 1 ? ", " : ", "}
                  </span>
                ))}
                and the Data Systems Evolution team at{" "}
                <Link
                  href="https://www.nasa.gov/marshall"
                  target="_blank"
                  color="#e01073"
                  _hover={{ color: "#bb1085" }}
                >
                  NASA Marshall Space Flight Center
                </Link>
                .
              </Text>
            </Stack>

            {/* VirtualiZarr Maintainers */}
            <Stack gap={6}>
              <Heading as="h2" size="lg" color="gray.700">
                VirtualiZarr Maintainers
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={4}>
                {virtualizarrMaintainers.map((member) => (
                  <TeamMember key={member.github} member={member} />
                ))}
              </SimpleGrid>
            </Stack>

            {/* Icechunk Core Developers */}
            <Stack gap={6}>
              <Heading as="h2" size="lg" color="gray.700">
                Icechunk Core Developers
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={4}>
                {icechunkCoreDevelopers.map((member) => (
                  <TeamMember key={member.github} member={member} />
                ))}
              </SimpleGrid>
            </Stack>

            {/* Earthaccess Integration */}
            <Stack gap={6}>
              <Heading as="h2" size="lg" color="gray.700">
                Earthaccess Virtual Zarr Integration
              </Heading>
              <Text color="gray.600">
                These individuals have contributed substantially to virtual
                dataset integration into earthaccess.
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mt={4}>
                {earthaccessIntegrationTeam.map((member) => (
                  <TeamMember key={member.github} member={member} />
                ))}
              </SimpleGrid>
            </Stack>

            {/* Community Contributors */}
            <Stack gap={6}>
              <Heading as="h2" size="lg" color="gray.700">
                Community Contributors
              </Heading>
              <Text color="gray.600">
                Many more people have contributed to these projects through
                code, documentation, and community support. Below we show all
                the contributors through git commits. We greatly appreciate
                those who contribute through other means as well.
              </Text>

              <Stack gap={8} mt={4}>
                {/* VirtualiZarr */}
                <Stack gap={3}>
                  <Link
                    href="https://github.com/zarr-developers/VirtualiZarr/graphs/contributors"
                    target="_blank"
                    fontWeight="semibold"
                    color="gray.700"
                    _hover={{ color: "#e01073" }}
                  >
                    VirtualiZarr Contributors
                  </Link>
                  <Link
                    href="https://github.com/zarr-developers/VirtualiZarr/graphs/contributors"
                    target="_blank"
                  >
                    <Image
                      src="https://contrib.rocks/image?repo=zarr-developers/VirtualiZarr"
                      alt="VirtualiZarr Contributors"
                      maxW="100%"
                    />
                  </Link>
                </Stack>

                {/* Icechunk */}
                <Stack gap={3}>
                  <Link
                    href="https://github.com/earth-mover/icechunk/graphs/contributors"
                    target="_blank"
                    fontWeight="semibold"
                    color="gray.700"
                    _hover={{ color: "#e01073" }}
                  >
                    Icechunk Contributors
                  </Link>
                  <Link
                    href="https://github.com/earth-mover/icechunk/graphs/contributors"
                    target="_blank"
                  >
                    <Image
                      src="https://contrib.rocks/image?repo=earth-mover/icechunk"
                      alt="Icechunk Contributors"
                      maxW="100%"
                    />
                  </Link>
                </Stack>

                {/* earthaccess */}
                <Stack gap={3}>
                  <Link
                    href="https://github.com/nsidc/earthaccess/graphs/contributors"
                    target="_blank"
                    fontWeight="semibold"
                    color="gray.700"
                    _hover={{ color: "#e01073" }}
                  >
                    Earthaccess Contributors
                  </Link>
                  <Link
                    href="https://github.com/nsidc/earthaccess/graphs/contributors"
                    target="_blank"
                  >
                    <Image
                      src="https://contrib.rocks/image?repo=nsidc/earthaccess"
                      alt="earthaccess Contributors"
                      maxW="100%"
                    />
                  </Link>
                </Stack>
              </Stack>
            </Stack>

            {/* Standing on the Shoulders of Giants */}
            <Stack gap={6}>
              <Heading as="h2" size="lg" color="gray.700">
                Standing on the Shoulders of Giants
              </Heading>
              <Text color="gray.600">
                Virtual Zarr builds on decades of foundational work in
                scientific data formats. We are grateful to the pioneers who
                made this possible.
              </Text>

              <Stack gap={4} mt={2}>
                <Text color="gray.600">
                  The{" "}
                  <Link
                    href="https://support.hdfgroup.org/archive/support/projects/h4map/h4map_team_members.html"
                    target="_blank"
                    color="#e01073"
                    _hover={{ color: "#bb1085" }}
                  >
                    HDF4 Mapping Project
                  </Link>{" "}
                  team laid essential groundwork: Ruth Aydt (Project Manager);
                  Mike Folk, Hyo-Kyung Lee, Binh-Minh Ribler, and MuQun Yang
                  from The HDF Group; Christopher Lynnes from GES-DISC; and Ruth
                  E. Duerr and Luis Lopez from NSIDC.
                </Text>

                <Text color="gray.600">
                  Aleksandar Jelenak wrote the first version of what would
                  become Kerchunk reference files. Rich Signell connected
                  Aleksandar with Martin Durant, who then created Kerchunk.
                  James Gallagher created DMR++. Their collective work
                  established the foundations that Virtual Zarr continues to
                  build upon.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
}
