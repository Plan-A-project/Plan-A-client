import React, {
  useState,
  useEffect,
  RefObject,
  useRef,
  ChangeEvent,
} from "react";

import { Flex, HStack, Spacer, Text, Box } from "@chakra-ui/layout";

import CameraIcon from "../icons/CameraIcon";
import KeyboardIcon from "../icons/KeyboardIcon";

type IKeyboardFixedElement = (fileUrls: string[]) => void;

function KeyboardFixedElement() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false); // mock keyboard
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileCount, setFileCount] = useState(0);

  function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  // 이미지 base64 변환 후 텍스트 + 이미지 모두 전달하는 방법
  function handleFileChange() {
    if (
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files.length > 0
    ) {
      const files = fileInputRef.current.files;
      setFileCount(count => count + files.length);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            const newNode = document.createElement("img");
            newNode.src = reader.result as string;
            newNode.alt = "포스팅 이미지";
            newNode.style.maxWidth = "100%";
            const targetElement = document.getElementById("contentEditable");
            targetElement && targetElement.appendChild(newNode);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

  return (
    <>
      <Box h={"70px"} />
      <HStack
        style={{
          position: "fixed",
          bottom: isKeyboardOpen ? "100px" : 0,
          left: 0,
          width: "100%",
          padding: "10px",
          border: "1px solid gray",
          textAlign: "center",
          background: "white",
        }}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          multiple
        />
        <Flex onClick={handleButtonClick}>
          <CameraIcon />
          <Text>{fileCount}/10</Text>
        </Flex>
        <Spacer />
        <KeyboardIcon />
      </HStack>
    </>
  );
}

export default KeyboardFixedElement;
