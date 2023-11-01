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
} from "@chakra-ui/react";
import Image from "next/image";

import Comment from "../icons/Comment";
import HeartEmpty from "../icons/HeartEmpty";
import ScrapEmptyIcon from "../icons/ScrapEmptyIcon";
import ScrapIcon from "../icons/ScrapIcon";
import WatchedIcon from "../icons/WatchedIcon";
import HasImageIcon from "../icons/HasImageIcon";
import postApis from "@/api/post";

type BoardItemContentProps = {
  title: string;
  leftTag?: string;
  tagType?: "primary" | "secondary" | "grey" | "error";
  description?: string;
  image?: string;
  imageAlt?: string;
  dday?: any;
  bookmark?: boolean;
  hasImage?: boolean;
  isEvent?: boolean;
  postId: number;
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
  const [mark, setMark] = useState(bookmark);
  const toggleMark = async (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setMark(p => !p);
    const response = await postApis.scrapPost(postId);
    console.log(1132, response);
  };
  return (
    <Flex align={"flex-end"}>
      <Box flex={1}>
        {leftTag ? (
          <Badge
            bg={`${tagType}.100`}
            color={`${tagType}.normal`}
            borderRadius={"md"}
            paddingY={"1px"}
            mb={"4px"}
          >
            {leftTag}
          </Badge>
        ) : null}
        <HStack gap={1} mb={1} align={"center"}>
          {hasImage && (
            <Box>
              <HasImageIcon />
            </Box>
          )}
          <Text color={"gray.900"} lineHeight={5} fontSize={18}>
            {title}
          </Text>
        </HStack>

        {description && (
          <Text fontSize={"sm"} color={"gray.600"}>
            {description}
          </Text>
        )}
      </Box>
      {image ? (
        <Box w={14} h={14} borderRadius={8} ml={6} overflow={"hidden"}>
          <Image
            src={image}
            width={56}
            height={56}
            alt={imageAlt || "이미지"}
            style={{ objectFit: "cover", width: 56, height: 56 }}
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

const FreeBoardItem: React.FC<PropsWithChildren<FreeBoardItemProps>> = ({
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
          {dday ? (
            <Heading color={"primary.500"} size={"xs"}>
              {dday}
            </Heading>
          ) : (
            ""
          )}
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

export default FreeBoardItem;
