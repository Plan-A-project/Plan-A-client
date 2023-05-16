import { Box, HStack, Tag, Text } from "@chakra-ui/react";

type BoardCategoryProps = {
  categories: string[];
};

const BoardCategory: React.FC<BoardCategoryProps> = ({ categories }) => {
  return (
    <Box borderBottom={"1px solid"} borderColor={"gray.100"} px={1.5}>
      <Text fontSize={"sm"} my={3}>
        카테고리
      </Text>
      <HStack pb={3} spacing={3}>
        {categories.map(category => (
          <Tag key={category}>{category}</Tag>
        ))}
      </HStack>
    </Box>
  );
};

export default BoardCategory;
