import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaGlobe, FaTwitter } from "react-icons/fa";
import { useGitHubUser } from "@/lib/github";

const SocialLink = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    target="_blank"
    aria-label={label}
    color="gray.500"
    _hover={{ color: "#e34b75" }}
  >
    <Icon size={18} />
  </Link>
);

export const TeamMember = ({ member }) => {
  const { data, error } = useGitHubUser(member.github);

  return (
    <Flex gap={4} align="flex-start">
      {/* Avatar */}
      <Box
        borderRadius="full"
        overflow="hidden"
        w="80px"
        h="80px"
        flexShrink={0}
        borderWidth="2px"
        borderColor="rgba(227, 75, 117, 0.2)"
      >
        <Image
          src={`https://github.com/${member.github}.png`}
          alt={member.name}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>

      {/* Info */}
      <Stack gap={1} flex={1}>
        <Text fontWeight="bold" color="gray.800">
          {data?.name || member.name}
        </Text>

        {data?.company && (
          <Text fontSize="sm" color="gray.600">
            {data.company}
          </Text>
        )}

        {/* Social Links */}
        <Flex gap={3} mt={1}>
          <SocialLink
            href={`https://github.com/${member.github}`}
            icon={FaGithub}
            label={`${member.name}'s GitHub`}
          />

          {data?.blog && (
            <SocialLink
              href={
                data.blog.startsWith("http")
                  ? data.blog
                  : `https://${data.blog}`
              }
              icon={FaGlobe}
              label={`${member.name}'s website`}
            />
          )}

          {data?.twitter_username && (
            <SocialLink
              href={`https://twitter.com/${data.twitter_username}`}
              icon={FaTwitter}
              label={`${member.name}'s Twitter`}
            />
          )}
        </Flex>

        {/* Bio */}
        {data?.bio && (
          <Text fontSize="sm" color="gray.500" lineClamp={2} mt={1}>
            {data.bio}
          </Text>
        )}
      </Stack>
    </Flex>
  );
};
