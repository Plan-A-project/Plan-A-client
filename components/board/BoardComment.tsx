import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

import IconHeart from "@/components/icons/IconHeart";
import IconMoreSmall from "@/components/icons/IconMoreSmall";
import IconReply from "@/components/icons/IconReply";

type BoardCommentProps = {
  username: string;
  profileImage?: string;
  content: string;
  reply?: boolean;
  withProfile?: boolean;
};

const BoardComment: React.FC<BoardCommentProps> = ({
  username,
  content,
  profileImage,
  withProfile,
  reply,
}) => {
  return (
    <Flex px={2} py={3}>
      {reply && <IconReply style={{ margin: "0 12px" }} />}
      <Box flex={1}>
        <HStack align={"flex-start"}>
          <Stack w={12} align={"flex-start"}>
            <Stack spacing={1} align={"center"}>
              {withProfile && (
                <Avatar name={username} size={"sm"} src={profileImage} />
              )}
              <Text color={"gray.600"} textStyle={"overline"}>
                {username}
              </Text>
            </Stack>
          </Stack>
          <Text color={"gray.900"} textStyle={"body2"} mr={4}>
            {content}
          </Text>
          <IconMoreSmall
            style={{
              marginLeft: "auto",
            }}
          />
        </HStack>
        <HStack align={"center"} pt={3}>
          <Button size="xs" variant={"outline"}>
            답글
          </Button>
          <IconHeart style={{ marginLeft: "auto" }} />
          <Text textStyle={"overline"}>2</Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default BoardComment;
