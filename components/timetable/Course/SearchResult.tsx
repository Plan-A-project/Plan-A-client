import {
  VStack,
  Flex,
  Box,
  HStack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Icons } from "@/assets/icons";

export default function ClassCard() {
  return (
    <Flex w="100%" gap={3}>
      <Box bg="#F8F8F8" p={4} flex="1">
        <HStack>
          <Text>미시경제원론</Text>
          <Flex>
            <Image src={Icons.Star.src} alt="rating" />
            4.5 / 4.0
          </Flex>
        </HStack>
        <div>수 11:00~1:00</div>
        <div>정경대 104호 / 강준호</div>
      </Box>
      <Button h="100%" bg="gray.300">
        추가
      </Button>
    </Flex>
  );
}
