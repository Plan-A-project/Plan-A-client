import { useState } from "react";

import {
  Stack,
  Flex,
  Text,
  Center,
  Divider,
  HStack,
  Image,
  Box,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { Icons } from "@/assets/icons";

import ScrollablePicker from "./ScrollablePicker";

export default function WriteComment() {
  const [rating, setRating] = useState(0);

  return (
    <Stack border="1px" borderColor="gray.200" p={4} w="100%">
      <Flex>
        <Center>수강시기</Center>
        <ScrollablePicker values={[2021, 2022, 2023, 2024, 2025]} />
        <Center>학년도</Center>
        <ScrollablePicker values={[1, 2]} />
        <Center>학기</Center>
      </Flex>
      <Divider />
      <HStack>
        <Text>별점</Text>
        <Text>4 / 5</Text>
        <HStack gap={1}>
          <Image
            src={rating < 1 ? Icons.StarEmpty.src : Icons.StarBig.src}
            alt="rating"
            onClick={() => setRating(1)}
          />
          <Image
            src={rating < 2 ? Icons.StarEmpty.src : Icons.StarBig.src}
            alt="rating"
            onClick={() => setRating(2)}
          />
          <Image
            src={rating < 3 ? Icons.StarEmpty.src : Icons.StarBig.src}
            alt="rating"
            onClick={() => setRating(3)}
          />
          <Image
            src={rating < 4 ? Icons.StarEmpty.src : Icons.StarBig.src}
            alt="rating"
            onClick={() => setRating(4)}
          />
          <Image
            src={rating < 5 ? Icons.StarEmpty.src : Icons.StarBig.src}
            alt="rating"
            onClick={() => setRating(5)}
          />
        </HStack>
      </HStack>
      <Divider />
      <Box>
        <Text>수강후기</Text>
        <Textarea placeholder="수강 후기를 자유롭게 입력해주세요." />
      </Box>
      <HStack>
        <Button w="100%">취소</Button>
        <Button w="100%">확인</Button>
      </HStack>
    </Stack>
  );
}
