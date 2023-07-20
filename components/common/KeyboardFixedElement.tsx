import React, {
  useState,
  useEffect,
  RefObject,
  useRef,
  ChangeEvent,
} from "react";

import { Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useRecoilState } from "recoil";

import postApis from "@/api/post";
import {
  IPostContent,
  postContentAtom,
} from "@/state/atoms/posting/postContentAtom";

import CameraIcon from "../icons/CameraIcon";
import KeyboardIcon from "../icons/KeyboardIcon";

function KeyboardFixedElement({
  ref,
  postId,
}: {
  ref: RefObject<HTMLTextAreaElement>;
  postId: number;
}) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [postContent, setPostContent] = useRecoilState(postContentAtom);

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files?.[0];
    // 파일 처리 코드
    const res = await postApis.postImage({
      postId,
      files,
    });
    if (res.ok && Array.isArray(res.data?.data)) {
      const imgUrls = res.data?.data.map(
        img =>
          `<Image src=${img.imageUrl} key=${img.imageId} alt="포스팅 이미지" />`,
      );
      imgUrls &&
        setPostContent(d => ({
          ...d,
          content: d.requestDto.main + imgUrls.join(" "),
        }));
      return postContentAtom;
    }
    // 오류 팝업
  }

  function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

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

  console.log("postContent", postContent);

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
        multiple
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
