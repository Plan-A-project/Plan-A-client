import { Box, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";

import Comment from "../icons/Comment";
import LikeIcon from "../icons/LikeIcon";
import ReportIcon from "../icons/ReportIcon";
import ScrapIconSm from "../icons/ScrapIconSm";
import WatchedIcon from "../icons/WatchedIcon";

type PostingViewProps = {
  images?: string[];
  title: string;
  cname: string;
  content: string;
  range: string;
  datePosted: string;
  dday: number;
  watched: number;
  author?: string;
};

function getImages(images?: string[]): React.ReactNode {
  if (!images) return <></>;

  return images.map((image, index) => (
    <Image
      key={`${index}:${image}`}
      src={image}
      alt={image}
      w={"100%"}
      borderRadius={8}
      mb={2}
    />
  ));
}

function getContent(content: string) {
  const lines = content.split("\n");
  return lines.map((line, index) => <p key={`${index}:${line}`}>{line}</p>);
}

const PostingView: React.FC<PostingViewProps> = ({
  author,
  cname,
  content,
  range,
  dday,
  datePosted,
  watched,
  title,
  images,
}) => {
  return (
    <Box p={2}>
      <Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>
        {cname}
      </Text>
      <Text fontSize={"lg"} color={"gray.900"} fontWeight={"bold"}>
        {title}
      </Text>
      <Flex>
        <Text fontSize={"xs"} color={"blue"} fontWeight={500} mr={2}>
          D-{dday}
        </Text>
        <Text fontSize={"xs"}>{range}</Text>
      </Flex>
      <Flex
        justify={"space-between"}
        borderY={"1px solid"}
        borderColor={"gray.100"}
        align={"center"}
        minH={30}
      >
        <HStack>
          <Text fontSize={"xs"} color={"gray.600"}>
            {author}
          </Text>
          <Text fontSize={"xs"} color={"gray.600"}>
            {datePosted}
          </Text>
        </HStack>
        <HStack>
          <WatchedIcon />
          <Text fontSize={"xs"} color={"gray.600"}>
            {watched}
          </Text>
        </HStack>
      </Flex>
      <Box py={4}>
        {getImages(images)}
        {getContent(content)}
      </Box>

      <Flex
        borderY={"1px solid"}
        borderColor={"gray.100"}
        gap={3}
        align={"center"}
        minH={30}
      >
        <Flex>
          <ScrapIconSm />
        </Flex>
        <Flex alignItems={"center"}>
          <LikeIcon />
          <Text fontSize={"xs"} color={"gray.600"} ml={1}>
            2
          </Text>
        </Flex>
        <Flex alignItems={"center"}>
          <Comment />
          <Text fontSize={"xs"} color={"gray.600"} ml={1}>
            2
          </Text>
        </Flex>
        <Spacer />
        <Flex alignItems={"center"}>
          <ReportIcon />
        </Flex>
      </Flex>
    </Box>
  );
};

export default PostingView;
