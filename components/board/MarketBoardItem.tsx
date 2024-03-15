import { MouseEventHandler, PropsWithChildren, useState } from "react";

import {
  Flex,
  FlexProps,
  Box,
  Text,
  TextProps,
  Badge,
  Heading,
  Stack,
  HStack,
  Image,
} from "@chakra-ui/react";

import Comment from "../icons/Comment";
import HeartEmpty from "../icons/HeartEmpty";
import WatchedIcon from "../icons/WatchedIcon";
import HasImageIcon from "../icons/HasImageIcon";

type BoardItemContentProps = {
  title: string;
  leftTag?: string;
  tagType?: "primary" | "secondary" | "grey" | "error";
  description?: string;
  image?: string | null;
  imageAlt?: string;
  dday?: any;
  bookmark?: boolean;
  hasImage?: boolean;
  isEvent?: boolean;
  postId?: number;
};

type FreeBoardItemProps = {
  date?: string;
  comments?: number;
  likes?: number;
  views: number;
} & FlexProps &
  BoardItemContentProps;

const BottomText = ({ children, ...props }: TextProps) => {
  return (
    // 0.625 for 10px, xs = 0.75 for 12px
    <Text fontSize={"xs"} color={"gray.600"} lineHeight={3} {...props}>
      {children}
    </Text>
  );
};

export const FreeBoardItemContent: React.FC<BoardItemContentProps> = ({
  title,
  leftTag,
  tagType = "error",
  description,
  image,
  imageAlt,
  bookmark,
  hasImage,
  postId,
}) => {
  return (
    <Flex align={"stetch"}>
      <Box flex={1}>
        {/* {leftTag ? ( */}
        <Badge
          bg={"#FBEAFF"}
          color={"#845EC2"}
          borderRadius={"md"}
          paddingY={"1px"}
          mb={"4px"}
        >
          복단대학교
        </Badge>
        {/* ) : null} */}
        <Stack gap={1} mb={1} align={"left"}>
          <Text color={"gray.900"} lineHeight={5} fontSize={18}>
            {title.split("$%$%$%").length == 1
              ? title
              : title.split("$%$%$%")[0]}
          </Text>
          <Text
            color={"gray.900"}
            lineHeight={5}
            fontSize={19}
            fontWeight={700}
            mt={2}
          >
            {title.split("$%$%$%").length == 1
              ? ""
              : `¥${parseInt(title.split("$%$%$%")[1]).toLocaleString(
                  "zh-CN",
                )}`}
          </Text>
        </Stack>
      </Box>
      {image ? (
        <Box
          w={"100px"}
          h={"100px"}
          borderRadius={8}
          border={"1px solid #ddd"}
          // boxShadow={"0 0 5px rgba(0, 0, 0, 0.1)"}
          ml={6}
          overflow={"hidden"}
        >
          <Image
            src={image}
            alt={imageAlt || "이미지"}
            objectFit="contain"
            w="100%"
            h="100%"
          />
        </Box>
      ) : null}
      {/* {bookmark ? (
        <button onClick={toggleMark}>
          {mark === false ? <ScrapEmptyIcon /> : <ScrapIcon />}
        </button>
      ) : null} */}
    </Flex>
  );
};

const MarketBoardItem: React.FC<PropsWithChildren<FreeBoardItemProps>> = ({
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
  postId,
  ...props
}) => {
  return (
    <Flex px={3} py={4} gap={3} direction={"column"} {...props}>
      <FreeBoardItemContent
        tagType={tagType}
        title={title}
        leftTag={leftTag}
        description={description}
        image={image}
        imageAlt={imageAlt}
        bookmark={bookmark}
        hasImage={hasImage}
        postId={postId}
      />
      <Flex justify={"space-between"} align={"center"}>
        <Flex gap={2} align={"center"}>
          <Text fontSize={"xs"} color={"gray.600"} lineHeight={3}>
            {date}
          </Text>
          {/* <BottomText>{date}</BottomText> */}
        </Flex>

        <Flex gap={"8px"} align={"center"}>
          {likes !== undefined ? (
            <Flex gap={"2px"} align={"center"}>
              <HeartEmpty />
              <BottomText>{likes}</BottomText>
            </Flex>
          ) : null}
          {comments !== undefined ? (
            <Flex gap={"2px"} align={"center"}>
              <Comment />
              <BottomText>{comments}</BottomText>
            </Flex>
          ) : null}
          <Flex gap={"2px"} align={"center"}>
            <WatchedIcon />
            <BottomText>{views}</BottomText>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MarketBoardItem;
