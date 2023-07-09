import { Avatar, Box, Button, HStack, Stack, Text } from "@chakra-ui/react";

type BoardCommentProps = {
  username: string;
  profileImage?: string;
  content: string;
  depth?: number;
  withProfile?: boolean;
};

const BoardComment: React.FC<BoardCommentProps> = ({
  username,
  content,
  profileImage,
  withProfile,
  depth,
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
        <Text color={"gray.900"}>{content}</Text>
      </HStack>
      <Button mt={3} size="xs" variant={"outline"}>
        답글
      </Button>
    </Box>
  );
};

export default BoardComment;
