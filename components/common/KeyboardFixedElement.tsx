import React, {
  useState,
  useEffect,
  RefObject,
  useRef,
  ChangeEvent,
} from "react";

import { Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRecoilState } from "recoil";

import postApis from "@/api/post";

// import {
//   IPostContent,
//   postContentAtom,
// } from "@/state/atoms/posting/generalPostingContentAtom";

import CameraIcon from "../icons/CameraIcon";
import KeyboardIcon from "../icons/KeyboardIcon";

type IKeyboardFixedElement = (fileUrls: string[]) => void;

function KeyboardFixedElement() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false); // mock keyboard
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileCount, setFileCount] = useState(0);

  // async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
  // Dev
  // const filesUrl = [
  //   "https://inflibucket.s3.ap-northeast-2.amazonaws.com/post/post_1/Screen%20Shot%202023-07-19%20at%209.28.22%20PM_1690029236680.png",
  // ];
  // handleImageChange(filesUrl);
  // setFileCount(i => i + filesUrl.length);
  // Prod
  // const files = event.target.files?.[0];
  // const res = await postApis.postImage({
  //   postId, // TODO: 실제 postid로 변경
  //   files,
  // });
  // if (res.ok && Array.isArray(res.data?.data)) {
  //   const filesUrl = res.data?.data.map(img => img.imageUrl); // 상태값 갱신
  //   if (filesUrl && filesUrl.length > 0) {
  //     setFileCount(i => i + filesUrl.length);
  //     handleImageChange(filesUrl);
  //   }
  // } // 오류 팝업
  // }

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
  );
}

export default KeyboardFixedElement;
