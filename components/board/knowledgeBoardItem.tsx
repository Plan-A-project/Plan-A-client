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
  Image,
  Center,
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
  date?: string;
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
type BadgeType = {
  [key: string]: {
    bg: string;
  };
};
const badges: BadgeType = {
  "분야 미정": { bg: "grey" },
  "IT/테크": { bg: "blue" },
  "건강/운동": { bg: "red" },
  "문화/생활": { bg: "purple" },
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
  date,
}) => {
  const badgeName =
    title.split("$%$%$%").length == 1 ? "분야 미정" : title.split("$%$%$%")[1];
  return (
    <Flex align={"stetch"}>
      <Flex flexDir={"column"} justifyContent={"space-between"} flex={1}>
        <Box>
          <Badge
            colorScheme={badges[badgeName]["bg"]}
            borderRadius={"4px"}
            py={"1px"}
            px={"5px"}
            mb={"4px"}
            fontWeight={"semibold"}
          >
            {badgeName}
          </Badge>
          {/* ) : null} */}
          <Stack gap={1} mb={1} align={"left"}>
            <Text color={"gray.900"} textStyle={"subtitle2"}>
              {title.split("$%$%$%").length == 1
                ? title
                : title.split("$%$%$%")[0]}
            </Text>
          </Stack>
        </Box>
        <Text fontSize={"xs"} color={"gray.600"} lineHeight={3}>
          {date}
        </Text>
      </Flex>
      <Box
        w={"100px"}
        h={"100px"}
        // borderRadius={8}
        border={"1px solid #ddd"}
        // boxShadow={"0 0 5px rgba(0, 0, 0, 0.1)"}
        ml={6}
        overflow={"hidden"}
      >
        {image ? (
          <Image
            src={image}
            alt={imageAlt || "이미지"}
            objectFit="cover"
            w="100%"
            h="100%"
          />
        ) : (
          <Center
            w={"100%"}
            h={"100%"}
            bg={
              "linear-gradient(0deg,rgb(0 0 0 / .24) 0%,rgb(0 0 0 / .24) 100%),linear-gradient(222deg,rgb(0 0 0 / 0) 17.62%,rgb(0 0 0 / .64) 100.06%)"
            }
            textStyle={"subtitle2"}
            color={"white"}
            textAlign={"center"}
          >
            {badgeName}
          </Center>
        )}
      </Box>
    </Flex>
  );
};

const KnowledgeBoardItem: React.FC<PropsWithChildren<FreeBoardItemProps>> = ({
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
        date={date}
      />

      {/* <Flex justify={"space-between"} align={"center"}>
        <Flex gap={2} align={"center"}>
          <Text fontSize={"xs"} color={"gray.600"} lineHeight={3}>
            {date}
          </Text>
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
      </Flex> */}
    </Flex>
  );
};

export default KnowledgeBoardItem;
