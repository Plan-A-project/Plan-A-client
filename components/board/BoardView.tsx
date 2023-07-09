import { Box, Flex, Image, Text } from "@chakra-ui/react";

import IconCommentSmall from "@/components/icons/IconCommentSmall";
import IconEyes from "@/components/icons/IconEyes";
import IconHeart from "@/components/icons/IconHeart";
import IconSiren from "@/components/icons/IconSiren";

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

type BoardViewProps = {
  images?: string[];
  title: string;
  content: string;
  date: string;
  author?: string;
  like?: number;
  comment?: number;
  report?: boolean;
};

const BoardView: React.FC<BoardViewProps> = ({
  author,
  content,
  date,
  title,
  images,
  like,
  comment,
  report,
}) => {
  return (
    <>
      <Text color={"gray.900"} fontWeight={"semibold"} lineHeight={5} p={2}>
        {title}
      </Text>
      <Flex
        p={2}
        borderY={"1px solid"}
        borderColor={"gray.100"}
        align={"center"}
        minH={30}
      >
        <Text textStyle={"caption2"} color={"gray.600"} mr={3}>
          {author || "익명"}
        </Text>
        <Text textStyle={"caption2"} color={"gray.600"} mr={"auto"}>
          {date}
        </Text>
        <IconEyes />
        <Text ml={1} textStyle={"overline"}>
          2
        </Text>
      </Flex>
      <Box px={2} py={4}>
        {getImages(images)}
        {getContent(content)}
      </Box>

      <Flex
        p={2}
        borderY={"1px solid"}
        borderColor={"gray.100"}
        align={"center"}
        gap={1}
        minH={30}
      >
        <IconHeart color={"#75788A"} />
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"} mr={2}>
          {like ?? 0}
        </Text>
        <IconCommentSmall color={"#75788A"} />
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"} mr={"auto"}>
          {comment ?? 0}
        </Text>
        {report && <IconSiren color={"#75788A"} />}
      </Flex>
    </>
  );
};

export default BoardView;
