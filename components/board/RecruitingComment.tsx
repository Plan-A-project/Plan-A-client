import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import HamburgerIcon from "../icons/HamburgerIcon";
import LikeIcon from "../icons/LikeIcon";

type RecruitingCommentProps = {
  username: string;
  profileImage?: string;
  content: string;
  depth?: number;
  withProfile?: boolean;
  likes?: number;
  time?: string;
};

const RecruitingComment: React.FC<RecruitingCommentProps> = ({
  username,
  content,
  profileImage,
  withProfile,
  depth,
  time,
  likes,
}) => {
  return (
    <Box px={2} py={3}>
      <HStack align={"flex-start"}>
        <Stack w={12} align={"flex-start"}>
          <Stack spacing={1} align={"center"}>
            {withProfile && (
              <Avatar name={username} size={"sm"} src={profileImage} />
            )}
            <Text color={"gray.600"} fontSize={"xs"}>
              {username}
            </Text>
          </Stack>
        </Stack>
        <Flex width={"100%"}>
          <Text color={"gray.900"}>{content}</Text>
          <Spacer />
          <HamburgerIcon />
        </Flex>
      </HStack>
      <Flex>
        <Button mt={3} size="xs" variant={"outline"}>
          답글
        </Button>
        <Spacer />
        <Flex color={"gray.600"} fontSize={"xs"}>
          <Text mr={3}>{time}</Text>
          <Flex>
            <LikeIcon /> {likes}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RecruitingComment;
