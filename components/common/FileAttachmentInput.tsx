import { ChangeEvent, useRef, useState } from "react";

import { Button, Flex, Input, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import CustomButton from "./CustomButton";

interface FileAttachmentInputType {
  title: string;
}

const FileAttachmentInput = ({ title }: FileAttachmentInputType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const openFileInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const [imagePreview, setImagePreview] = useState<string | any>("");
  const [imageName, setImageName] = useState<string>("");

  // input onChange될 경우, 이미지 인코딩한 뒤 state에 담기
  const addPreviewImage = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise<void>(resolve => {
        reader.onload = () => {
          setImagePreview(reader.result);
          setImageName(file.name);
          resolve();
        };
      });
    }
  };

  return (
    <Stack spacing={"16px"} mt={"48px"}>
      <Button
        h={"52px"}
        borderWidth={"1px"}
        borderStyle={"solid"}
        borderColor={"primary.500"}
        color={"primary.500"}
        bg={"transparent"}
        borderRadius={"16px"}
        onClick={openFileInput}
      >
        {title}
      </Button>
      <Input
        type="file"
        accept="image/*"
        display={"none"}
        ref={inputRef}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            addPreviewImage(e.target.files[0]);
          }
        }}
      />
      {imagePreview && (
        <VStack spacing={"14px"} alignItems={"flex-start"}>
          <Text textStyle={"caption1"}>첨부된 파일</Text>
          <Flex gap={"16px"} alignItems={"center"}>
            <Image
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "primary.500",
                borderRadius: "8px",
              }}
              width={56}
              height={56}
              src={imagePreview}
              alt={"userImage"}
            />
            <Text color={"grey.900"} textStyle={"caption2"}>
              {imageName}
            </Text>
          </Flex>
        </VStack>
      )}
      <CustomButton
        title="인증하기"
        disabled={!imagePreview}
        buttonStyle="filled"
      />
    </Stack>
  );
};

export default FileAttachmentInput;
