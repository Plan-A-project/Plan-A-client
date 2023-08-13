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
}) => {
  return (
    <Box px={2} py={3}>
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
      <ReplyComment
        createdAt={"1"}
        likesCount={0}
        username={"테스트"}
        content={
          "ㅎㅇㅎ안녕하세요 안녀앟세요 안녕하세요 안녕하세요 안녕하ㅏ세요ㅇ"
        }
      />
    </Box>
  );
};

export default BoardComment;
