import { useRef, useState } from "react";
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
import Close from "../icons/Close";

import formatCommentDate from "@/utils/formatCommentDate";

import HeartEmpty from "../icons/HeartEmpty";
import ReplyIcon from "../icons/ReplyIcon";
import { useDropdown } from "@/hooks/useDropdown";
import useDrawer from "@/hooks/useDrawer";
import { useRouter } from "next/router";
import useSnackbar from "@/hooks/useSnackbar";
import ThreeDotsSmallIcon from "../icons/ThreeDotsSmallIcon";
import commentApis from "@/api/comment";
import likesApis from "@/api/like";
import HeartIcon from "../icons/HeartIcon";

type BoardCommentProps = {
  username: string;
  profileImage?: string;
  content: string;
  withProfile?: boolean;
  handleReply?: any;
  createdAt: string;
  likesCount: number;
  isReply?: boolean;
  myComment: boolean;
  commentId: any;
  pressedLikeOnThisComment: boolean;
  isDeleted?: boolean;
};

const BoardComment: React.FC<BoardCommentProps> = ({
  username,
  content,
  profileImage,
  withProfile,
  handleReply,
  createdAt,
  likesCount,
  isReply,
  myComment,
  commentId,
  isDeleted,
  pressedLikeOnThisComment,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActivated, activateSnackbar, Snackbar] =
    useSnackbar("해당 댓글이 삭제되었습니다");
  const [likes, setLikes] = useState<number>(likesCount);
  const [isPressedLike, setIsPressedLike] = useState<boolean>(
    pressedLikeOnThisComment,
  );
  const [dropdown, toggle] = useDropdown({
    menus: ["삭제하기"],
    xGap: -15,
    yGap: 0,
    hAlign: "right",
    vAlign: "bottom",
    onMenuClick: menu => {
      if (menu === 0) {
        onOpen();
        // // 수정하기페이지 이동
        // router.push(`/board/form?postId=${postId}`);
      }
      // else if (menu === 1) {
      //   onOpen();
      // }
    },
    ref,
  });
  async function deletePost() {
    const res = await commentApis.deleteComment(commentId);
    if (res.ok) {
      activateSnackbar();
      onClose();
    }
  }
  async function handleLike() {
    if (!isPressedLike) {
      await likesApis.commentLike(commentId);
      setLikes(p => p + 1);
      setIsPressedLike(true);
    }
    if (isPressedLike) {
      await likesApis.cancelCommentLike(commentId);
      setLikes(p => p - 1);
      setIsPressedLike(false);
    }
  }
  const [onOpen, ButtonDrawer, onClose] = useDrawer({
    header: "정말 삭제하시겠어요?",
    subtitle: "",
    children: <></>,
    btnContent: "삭제하기",
    btnHandler: deletePost,
  });
  const ReplyComment: React.FC<BoardCommentProps> = ({
    username,
    content,
    profileImage,
    withProfile,
    createdAt,
    likesCount,
    myComment,
    commentId,
    pressedLikeOnThisComment,
  }) => {
    return (
      <Box py={3}>
        {isActivated && <Snackbar />}
        <ButtonDrawer />
        <Flex pl={3} justify={"space-between"}>
          <Flex>
            <ReplyIcon />
            <Stack w={12} align={"flex-start"}>
              <Stack spacing={1} align={"center"}>
                {withProfile && (
                  <Avatar name={username} size={"sm"} src={profileImage} />
                )}
                <Text textStyle={"overline"} minW={10}>
                  {username}
                </Text>
              </Stack>
            </Stack>
            <Text textStyle={"body1"}>{content}</Text>
          </Flex>
          {myComment && (
            <Box
              p={0}
              h={4}
              ref={ref}
              onClick={() => {
                onOpen();
              }} //toggle(true) 토글 쓰려면 변경
              bg={"none"}
              _focus={{ bg: "none" }}
            >
              {/* <ThreeDotsSmallIcon /> */}
              <Close />
            </Box>
          )}
        </Flex>
        <Flex align={"baseline"} justify={"flex-end"}>
          <Flex mt={4}>
            <Text mr={3} textStyle={"overline"}>
              {formatCommentDate(createdAt)}
            </Text>
            <Box onClick={handleLike}>
              {isPressedLike ? <HeartIcon /> : <HeartEmpty />}
            </Box>
            <Text ml={1} textStyle={"overline"}>
              {likes}
            </Text>
          </Flex>
        </Flex>
      </Box>
    );
  };
  return (
    <Box px={2} py={3}>
      {isReply && (
        <>
          {dropdown}
          {isActivated && <Snackbar />}
          <ButtonDrawer />
          <HStack align={"center"} justify={"space-between"}>
            <Flex>
              {withProfile ? (
                <Stack align={"start"} mr={4}>
                  <Stack align={"center"}>
                    {withProfile && (
                      <Avatar name={username} size={"sm"} src={profileImage} />
                    )}
                    <Text align={"center"} maxW={"36px"} textStyle={"overline"}>
                      {username}
                    </Text>
                  </Stack>
                </Stack>
              ) : (
                <Stack w={12} align={"start"}>
                  <Stack spacing={1} align={"start"}>
                    {withProfile && (
                      <Avatar name={username} size={"sm"} src={profileImage} />
                    )}
                    <Text textStyle={"overline"} minW={10}>
                      {username}
                    </Text>
                  </Stack>
                </Stack>
              )}

              <Text color={isDeleted ? "red" : "black"} textStyle={"body1"}>
                {content}
              </Text>
            </Flex>
            {myComment && (
              <Box
                p={0}
                h={4}
                ref={ref}
                onClick={() => {
                  onOpen();
                }} //toggle(true) 토글 쓰려면 변경
                bg={"none"}
                _focus={{ bg: "none" }}
              >
                {/* <ThreeDotsSmallIcon /> */}
                <Close />
              </Box>
            )}
          </HStack>
          <Flex align={"baseline"} justify={"space-between"}>
            <Button onClick={handleReply} mt={3} size="xs" variant={"outline"}>
              답글
            </Button>
            <Flex>
              <Text mr={3} textStyle={"overline"}>
                {formatCommentDate(createdAt)}
              </Text>
              <Box onClick={handleLike}>
                {isPressedLike ? <HeartIcon /> : <HeartEmpty />}
              </Box>
              <Text ml={1} textStyle={"overline"}>
                {likes}
              </Text>
            </Flex>
          </Flex>
        </>
      )}
      {!isReply && (
        <ReplyComment
          createdAt={createdAt}
          likesCount={likesCount}
          username={username}
          content={content}
          commentId={commentId}
          myComment={myComment}
          pressedLikeOnThisComment={pressedLikeOnThisComment}
        />
      )}
    </Box>
  );
};

export default BoardComment;
