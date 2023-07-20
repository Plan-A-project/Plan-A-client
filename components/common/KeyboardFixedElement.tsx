import React, {
  useState,
  useEffect,
  RefObject,
  useRef,
  ChangeEvent,
} from "react";

import { Box, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/layout";

import CameraIcon from "../icons/CameraIcon";
import KeyboardIcon from "../icons/KeyboardIcon";

function KeyboardFixedElement({
  ref,
}: {
  ref: RefObject<HTMLTextAreaElement>;
}) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // 파일 처리 코드
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    const handleKeyboardEvent = (event: FocusEvent) => {
      setIsKeyboardOpen(event.type === "focus");
    };

    const inputElement = ref?.current;
    if (inputElement) {
      inputElement.addEventListener("focus", handleKeyboardEvent);
      inputElement.addEventListener("blur", handleKeyboardEvent);
    }

    return () => {
      // 클린업
      if (inputElement) {
        inputElement.removeEventListener("focus", handleKeyboardEvent);
        inputElement.removeEventListener("blur", handleKeyboardEvent);
      }
    };
  }, []);

  return (
    <HStack
      style={{
        position: "fixed",
        bottom: isKeyboardOpen ? "100px" : 0,
        left: 0,
        width: "100%",
        padding: "10px",
        border: "1px solid gray",
        textAlign: "center",
      }}
    >
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Flex onClick={handleButtonClick}>
        <CameraIcon />
        <Text>0/10</Text>
      </Flex>
      <Spacer />
      <KeyboardIcon />
    </HStack>
  );
}

export default KeyboardFixedElement;
