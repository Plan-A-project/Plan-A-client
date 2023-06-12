import {
  RadioGroup,
  Radio,
  Stack,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import BottomDrawer from "./BottomDrawer";

export default function WriteCommentDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const props = {
    btnContent: "시간표 편집",
    drawerHeader: "시간표 편집",
    drawerText: "중복된 과목 중 하나만 선택해주세요.",
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <BottomDrawer {...props}>
      <RadioGroup defaultValue="1">
        <Stack>
          <Radio size="md" name="1">
            <Box p={4} flex="1">
              <div>미시경제원론</div>
              <div>수 11:00~1:00</div>
              <div>정경대 104호 / 강준호</div>
            </Box>
          </Radio>
          <Radio size="md" name="2">
            <Box p={4} flex="1">
              <div>미시경제원론</div>
              <div>수 11:00~1:00</div>
              <div>정경대 104호 / 강준호</div>
            </Box>
          </Radio>
          <Radio size="md" name="3">
            <Box p={4} flex="1">
              <div>미시경제원론</div>
              <div>수 11:00~1:00</div>
              <div>정경대 104호 / 강준호</div>
            </Box>
          </Radio>
          <Button bg="gray.300">편집 완료</Button>
        </Stack>
      </RadioGroup>
    </BottomDrawer>
  );
}
