import { PropsWithChildren, useEffect, useRef, useState } from "react";

import {
  Flex,
  FlexProps,
  Box,
  Text,
  HStack,
  Stack,
  Circle,
  Image,
  Button,
  Avatar,
} from "@chakra-ui/react";

import Comment from "../icons/Comment";
import HeartEmpty from "../icons/HeartEmpty";
import postApis from "@/api/post";
import likesApis from "@/api/like";
import HeartIcon from "../icons/HeartIcon";
import { useRouter } from "next/router";
import formatCommentDate from "@/utils/formatCommentDate";
import { useDropdown } from "@/hooks/useDropdown";
import useDrawer from "@/hooks/useDrawer";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import useSnackbar from "@/hooks/useSnackbar";
import CommentBar from "../review/CommentBar";
import ProfileBasic from "../icons/ProfileBasic";
import { useSetRecoilState } from "recoil";
import { updatePostingAtom } from "@/state/atoms/posting/postingAtom";

type BoardItemContentProps = {
  title: string;
  leftTag?: string;
  tagType?: "primary" | "secondary" | "grey" | "error";
  description?: any;
  image?: string;
  imageAlt?: string;
  dday?: any;
  bookmark?: boolean;
  hasImage?: boolean;
  isEvent?: boolean;
  postId: number;
  pressedLike?: boolean;
  nickname?: string;
  createdAt?: string | undefined;
  isAdmin?: boolean;
  isMyPost?: boolean;
  thumbnailUrl: string | null;
};

type FreeBoardItemProps = {
  date?: string;
  comments?: number;
  likes?: number;
  views: number;
} & FlexProps &
  BoardItemContentProps;

export const FreeBoardItemContent: React.FC<BoardItemContentProps> = ({
  title,
  description,
  bookmark,
  postId,
  nickname,
  createdAt,
  isAdmin,
  isMyPost,
  thumbnailUrl,
}) => {
  const [isActivated, activateSnackbar, Snackbar] =
    useSnackbar("해당 게시글이 삭제되었습니다");
  const setUpdatePosting = useSetRecoilState(updatePostingAtom);
  const [mark, setMark] = useState(bookmark);
  const toggleMark = async (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setMark(p => !p);
    await postApis.scrapPost(postId);
  };
  const ref = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const [dropdown, toggle] = useDropdown({
    menus: ["수정하기", "삭제하기"],
    xGap: -15,
    yGap: 0,
    hAlign: "right",
    vAlign: "bottom",
    onMenuClick: menu => {
      if (menu === 0) {
        // 수정하기페이지 이동
        // setUpdatePosting(true);
        router.push(`/board/form?postId=${postId}`);
      } else if (menu === 1) {
        onOpen();
      }
    },
    ref,
  });
  const [onOpen, ButtonDrawer, onClose] = useDrawer({
    header: "정말 삭제하시겠어요?",
    subtitle: "",
    children: <></>,
    btnContent: "삭제하기",
    btnHandler: deletePost,
  });

  async function deletePost() {
    const res = await postApis.deletePost({ postId });
    if (res.ok) {
      activateSnackbar();
      onClose();
      location.reload();
    }
  }
  return (
    <Flex align={"flex-end"}>
      {dropdown}
      <ButtonDrawer />
      <Box flex={1}>
        <Flex mb={4} justify={"space-between"} align={"center"}>
          <Flex>
            <Circle size={"28px"} overflow={"hidden"} mr={2}>
              {thumbnailUrl ? (
                <Avatar size={"sm"} src={thumbnailUrl} />
              ) : (
                // <Image src={thumbnailUrl} alt="Uploaded Preview" width="100" />
                <ProfileBasic />
              )}
            </Circle>
            <Stack gap={0} align={"flex-start"} justify={"space-between"}>
              <Text textStyle={"caption2"}>{nickname}</Text>
              <Text textStyle={"overline"}>
                {createdAt && formatCommentDate(createdAt)}
              </Text>
            </Stack>
          </Flex>
          {isMyPost || isAdmin ? (
            <HStack gap={2}>
              <RiEditLine
                size={20}
                onClick={() => {
                  setUpdatePosting(true);
                  router.push(`/board/form?postId=${postId}`);
                }}
              />
              <RiDeleteBinLine size={20} color="red" onClick={() => onOpen()} />
            </HStack>
          ) : (
            <></>
          )}
        </Flex>
        <HStack gap={1} mb={2} align={"center"}>
          <Text textStyle={"subtitle2"}>{title}</Text>
        </HStack>
        <Box
          textStyle={"body1"}
          dangerouslySetInnerHTML={{ __html: description }}
        ></Box>
      </Box>
    </Flex>
  );
};

const ReviewBoardItem: React.FC<PropsWithChildren<FreeBoardItemProps>> = ({
  date,
  comments,
  likes,
  views,
  title,
  leftTag,
  tagType,
  description,
  image,
  imageAlt,
  dday,
  bookmark,
  hasImage,
  isEvent,
  postId,
  pressedLike,
  thumbnailUrl,
  ...props
}) => {
  const [postData, setPostData] = useState<any>({});
  const [hasShownLoginAlert, setHasShownLoginAlert] = useState(false);
  const [likesCount, setLikesCount] = useState<any>(likes);
  const [isPressedLike, setIsPressedLike] = useState<any>(postData.pressedLike);
  const [onOpen, ButtonDrawer, onClose] = useDrawer({
    header: "",
    subtitle: "",
    children: <CommentBar postId={postId} />,
    btnContent: "삭제하기",
    // btnHandler: deletePost,
  });
  const router = useRouter();
  async function handleLike() {
    if (!isPressedLike) {
      await likesApis.postLike(postId);
      setLikesCount((p: number) => p + 1);
      setIsPressedLike(true);
    }
    if (isPressedLike) {
      await likesApis.cancelPostLike(postId);
      setLikesCount((p: number) => p - 1);
      setIsPressedLike(false);
    }
  }

  useEffect(() => {
    async function getPostData() {
      const response = await postApis.readPost({ postId });
      if (response.ok && response.data) {
        setPostData(response?.data.data);
        setIsPressedLike(response?.data.data.pressedLike);
      } else if (response.code === 401 && !hasShownLoginAlert) {
        setHasShownLoginAlert(true);
        // alert("로그인을 진행해주세요.");
        router.push("/myPage");
      }
    }
    getPostData();
  }, [setHasShownLoginAlert]);

  return (
    <Flex px={3} py={4} pb={0} gap={3} direction={"column"} {...props}>
      <FreeBoardItemContent
        tagType={tagType}
        title={title}
        leftTag={leftTag}
        description={postData.content}
        image={image}
        imageAlt={imageAlt}
        bookmark={bookmark}
        hasImage={hasImage}
        postId={postId}
        nickname={postData.nickname}
        createdAt={postData.createdAt}
        isAdmin={postData.admin}
        isMyPost={postData.myPost}
        thumbnailUrl={postData.profileUrl}
      />
      <Flex
        p={"7px"}
        mt={2}
        borderTop={"1px solid"}
        borderColor={"gray.100"}
        gap={3}
        align={"center"}
        minH={30}
      >
        <Flex align={"center"}>
          <Box onClick={handleLike}>
            {isPressedLike ? <HeartIcon /> : <HeartEmpty />}
          </Box>
          <Text pl={1} fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
            {likesCount}
          </Text>
        </Flex>
        <Flex align={"center"} onClick={onOpen}>
          <Comment />
          <Text pl={1} fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
            {comments ? `댓글 ${comments}개 모두 보기` : "댓글 작성하기"}
          </Text>
        </Flex>
      </Flex>
      <ButtonDrawer />
    </Flex>
  );
};

export default ReviewBoardItem;
