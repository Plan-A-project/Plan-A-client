import {
  Avatar,
  Box,
  Button,
  HStack,
  Stack,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";

import formatCommentDate from "@/utils/formatCommentDate";

import HeartEmpty from "../icons/HeartEmpty";
import ReplyIcon from "../icons/ReplyIcon";

type BoardCommentProps = {
  username: string;
  profileImage?: string;
  content: string;
  depth?: number;
  withProfile?: boolean;
  handleReply?: any;
  replyComment?: any;
  createdAt: string;
  likesCount: number;
  isReply?: boolean;
};
const ReplyComment: React.FC<BoardCommentProps> = ({
  username,
  content,
  profileImage,
  withProfile,
  createdAt,
  likesCount,
}) => {
  return (
    <Box py={3}>
      <Divider mb={3} />
      <Flex pl={3}>
        <ReplyIcon />
        <HStack align={"flex-start"} pl={3}>
          <Stack w={12} align={"flex-start"}>
            <Stack spacing={1} align={"center"}>
              {withProfile && (
                <Avatar name={username} size={"sm"} src={profileImage} />
              )}
              <Text textStyle={"overline"}>{username}</Text>
            </Stack>
          </Stack>
          <Text textStyle={"body1"}>{content}</Text>
        </HStack>
      </Flex>
      <Flex align={"baseline"} justify={"flex-end"}>
        <Flex mt={4}>
          <Text mr={3} textStyle={"overline"}>
            {formatCommentDate(createdAt)}
          </Text>
          <HeartEmpty />
          <Text ml={1} textStyle={"overline"}>
            {likesCount}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
const BoardComment: React.FC<BoardCommentProps> = ({
  username,
  content,
  profileImage,
  withProfile,
  depth,
  handleReply,
  replyComment,
  createdAt,
  likesCount,
  isReply,
}) => {
  return (
    <Box px={2} py={3}>
      {!isReply && (
        <>
          <HStack align={"flex-start"}>
            <Stack w={12} align={"start"}>
              <Stack spacing={1} align={"start"}>
                {withProfile && (
                  <Avatar name={username} size={"sm"} src={profileImage} />
                )}
                <Text textStyle={"overline"}>{username}</Text>
              </Stack>
            </Stack>
            <Text textStyle={"body1"}>{content}</Text>
          </HStack>
          <Flex align={"baseline"} justify={"space-between"}>
            <Button onClick={handleReply} mt={3} size="xs" variant={"outline"}>
              답글
            </Button>
            <Flex>
              <Text mr={3} textStyle={"overline"}>
                {formatCommentDate(createdAt)}
              </Text>

              <HeartEmpty />
              <Text ml={1} textStyle={"overline"}>
                {likesCount}
              </Text>
            </Flex>
          </Flex>
        </>
      )}
      {isReply && (
        <ReplyComment
          createdAt={formatCommentDate(createdAt)}
          likesCount={likesCount}
          username={username}
          content={content}
        />
      )}
    </Box>
  );
};

export default BoardComment;
