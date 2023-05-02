import { Box, chakra, Flex, Image, Text } from "@chakra-ui/react";

type BoardViewProps = {
  images?: string[];
  title: string;
  content: string;
  date: string;
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

const BoardView: React.FC<BoardViewProps> = ({
  author,
  content,
  date,
  title,
  images,
}) => {
  return (
    <>
      <Text color={"gray.900"} fontWeight={"semibold"} lineHeight={5} p={2}>
        {title}
      </Text>
      <Flex
        justify={"space-between"}
        p={2}
        borderY={"1px solid"}
        borderColor={"gray.100"}
        align={"center"}
        minH={30}
      >
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
          {author || "익명"}
        </Text>
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
          {date}
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
        gap={3}
        align={"center"}
        minH={30}
      >
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
          Likes 2
        </Text>
        <Text fontSize={"xs"} lineHeight={0.75} color={"gray.600"}>
          Comments 2
        </Text>
      </Flex>
    </>
  );
};

export default BoardView;
