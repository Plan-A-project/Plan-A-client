import {
  Box,
  Button,
  ChakraProps,
  HStack,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";

import IconPhoto from "../icons/IconPhoto";

const formProps: ChakraProps = {
  border: "none",
  borderBottom: "1px solid",
  borderColor: "gray.100",
  borderRadius: 0,
  _focus: { borderColor: "gray.300" },
  px: 2,
};

const inputProps: ChakraProps = {
  ...formProps,
  py: 2,
};

type BoardBaseFormProps = {};

const BoardBaseForm = () => {
  return (
    <>
      <Input
        flexShrink={0}
        variant={"unstyled"}
        h={9}
        mt={3}
        {...inputProps}
        placeholder="제목을 입력해주세요."
      />
      <Box {...formProps}>
        <Text fontSize={"sm"} my={3}>
          사진 첨부 (최대 10장)
        </Text>
        <HStack overflowX={"auto"} spacing={3} pb={4}>
          <Button
            w={14}
            height={14}
            flexShrink={0}
            variant={"outline"}
            borderStyle={"dashed"}
          >
            <IconPhoto />
          </Button>
          <Box
            w={14}
            h={14}
            borderRadius={8}
            ml={6}
            overflow={"hidden"}
            flexShrink={0}
          >
            <Image
              src={"https://via.placeholder.com/56"}
              width={56}
              height={56}
              alt={"이미지"}
              style={{ objectFit: "cover", width: 56, height: 56 }}
            />
          </Box>
        </HStack>
      </Box>
      <Textarea
        mt={2}
        flex={1}
        resize={"none"}
        lineHeight={5}
        placeholder="내용을 입력해주세요"
        rows={13}
        {...inputProps}
        p={2}
        sx={{ boxShadow: "none !important" }}
      />
    </>
  );
};

export default BoardBaseForm;
