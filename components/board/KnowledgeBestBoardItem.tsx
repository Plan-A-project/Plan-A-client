import { PropsWithChildren } from "react";

import {
  Flex,
  FlexProps,
  Box,
  Text,
  Badge,
  Stack,
  Image,
  Center,
} from "@chakra-ui/react";

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
  "졸업생 인터뷰": { bg: "cyan" },
  "경제/경영": { bg: "orange" },
  "인문/철학": { bg: "yellow" },
  "음악/미술": { bg: "green" },
  "주식/제태크": { bg: "teal" },
  "창업/비즈니스": { bg: "pink" },
};
export const FreeBoardItemContent: React.FC<BoardItemContentProps> = ({
  title,
  image,
  imageAlt,
}) => {
  const badgeName =
    title.split("$%$%$%").length == 1 ? "분야 미정" : title.split("$%$%$%")[1];
  return (
    <Flex flexDir={"column"} align={"stetch"}>
      <Box
        w={"100%"}
        h={"162px"}
        // borderRadius={8}
        border={"1px solid rgba(0, 0, 0, .04)"}
        // boxShadow={"0 0 5px rgba(0, 0, 0, 0.1)"}

        overflow={"hidden"}
      >
        {image ? (
          <Image
            src={image}
            alt={imageAlt || "이미지"}
            objectFit="cover" // 이미지가 부모 요소에 꽉 차도록 하면서 비율을 유지합니다.
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
            textStyle={"headline1"}
            color={"white"}
            textAlign={"center"}
          >
            {badgeName}
          </Center>
        )}
      </Box>

      <Box>
        <Box mb={1} mt={2}>
          <Badge
            colorScheme={badges[badgeName]["bg"]}
            borderRadius={"4px"}
            py={"1px"}
            px={"6px"}
            w={"auto"}
          >
            {badgeName}
          </Badge>
          <Text mt={1} color={"gray.900"} textStyle={"subtitle1"}>
            {title.split("$%$%$%").length == 1
              ? title
              : title.split("$%$%$%")[0]}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

const KnowledgeBestBoardItem: React.FC<
  PropsWithChildren<FreeBoardItemProps>
> = ({
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
    </Flex>
  );
};

export default KnowledgeBestBoardItem;
