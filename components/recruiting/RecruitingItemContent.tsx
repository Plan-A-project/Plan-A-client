import { Box, Flex, Stack, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";

type RecruitingItemContentProps = {
  title: string;
  topTag?: React.ReactNode;
  member?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

const RecruitingItemContent: React.FC<RecruitingItemContentProps> = ({
  title,
  member,
  description,
  image,
  imageAlt,
}) => {
  return (
    <Box>
      <Box>
        {member === "기업" && (
          <Tag bg={"#C5F2EE"} color={"#00AB9A"} width={"fit-content"}>
            {member}
          </Tag>
        )}
        {member === "관리자" && (
          <Tag bg={"#ECECEF"} color={"#75788A"} width={"fit-content"}>
            {member}
          </Tag>
        )}
      </Box>
      <Flex>
        <Box flex={1} my={2}>
          <Stack gap={2}>
            <Text color={"gray.900"}>{title}</Text>
          </Stack>
          {description && (
            <Text fontSize={"sm"} color={"gray.600"}>
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
    </Box>
  );
};

export default RecruitingItemContent;
