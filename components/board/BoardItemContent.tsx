import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

type BoardItemContentProps = {
  title: string;
  leftTag?: React.ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
};

const BoardItemContent: React.FC<BoardItemContentProps> = ({
  title,
  leftTag,
  description,
  image,
  imageAlt,
}) => {
  return (
    <Flex>
      <Box flex={1}>
        <Flex gap={2}>
          {leftTag && leftTag}
          <Text color={"gray.900"} textStyle={"body1"}>
            {title}
          </Text>
        </Flex>
        {description && (
          <Text
            textStyle={"body2"}
            color={"gray.600"}
            sx={{
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              overflow: "hidden",
            }}
          >
            {description}
          </Text>
        )}
      </Box>
      {image && (
        <Box w={14} h={14} borderRadius={8} ml={6} overflow={"hidden"}>
          <Image
            src={image}
            width={56}
            height={56}
            alt={imageAlt || "이미지"}
            style={{ objectFit: "cover", width: 56, height: 56 }}
          />
        </Box>
      )}
    </Flex>
  );
};

export default BoardItemContent;
