import { MouseEventHandler, PropsWithChildren, useState } from "react";

import {
  Flex,
  FlexProps,
  Box,
  Text,
  TextProps,
  Badge,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";

import Comment from "../icons/Comment";
import HeartEmpty from "../icons/HeartEmpty";
import ScrapEmptyIcon from "../icons/ScrapEmptyIcon";
import ScrapIcon from "../icons/ScrapIcon";
import WatchedIcon from "../icons/WatchedIcon";

type BoardItemContentProps = {
  title: string;
  leftTag?: string;
  tagType?: "primary" | "secondary" | "grey";
  description?: string;
  image?: string;
  imageAlt?: string;
  dday?: number;
  bookmark?: boolean;
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
  tagType = "primary",
  description,
  image,
  imageAlt,
  bookmark,
}) => {
  const [mark, setMark] = useState(bookmark);
  const toggleMark = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setMark(p => !p);
  };
  return (
    <Flex align={"center"}>
      <Box flex={1}>
        {leftTag ? (
          <Badge
            bg={`${tagType}.100`}
            color={`${tagType}.500`}
            borderRadius={"md"}
            paddingY={"1px"}
            mb={"4px"}
          >
            {leftTag}
          </Badge>
        ) : null}
        <Text color={"gray.900"} lineHeight={5} fontSize={18} mb={1}>
          {title}
        </Text>

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
      {bookmark !== undefined ? (
        <button onClick={toggleMark}>
          {mark === false ? <ScrapEmptyIcon /> : <ScrapIcon />}
        </button>
      ) : null}
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
      />
      <Flex justify={"space-between"} align={"center"}>
        <Flex gap={2} align={"end"}>
          {dday !== undefined ? (
            <Heading color={"primary.500"} size={"xs"}>
              D-{dday}
            </Heading>
          ) : null}
          <BottomText mr={"auto"}>{date}</BottomText>
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
