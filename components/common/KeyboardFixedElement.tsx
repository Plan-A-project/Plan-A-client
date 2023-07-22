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
import {
  IPostContent,
  postContentAtom,
} from "@/state/atoms/posting/postContentAtom";

import CameraIcon from "../icons/CameraIcon";
import KeyboardIcon from "../icons/KeyboardIcon";

function KeyboardFixedElement({ postId }: { postId: number }) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileCount, setFileCount] = useState(0);

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    // Dev
    const filesUrl = [
      "https://inflibucket.s3.ap-northeast-2.amazonaws.com/post/post_1/Screen%20Shot%202023-07-19%20at%209.28.22%20PM_1690029236680.png",
    ];
    handleImageChange(filesUrl);
    setFileCount(i => i + filesUrl.length);

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
  }

  function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function handleImageChange(filesUrl: string[] | undefined) {
    if (filesUrl) {
      for (let i = 0; i < filesUrl.length; i++) {
        const newNode = document.createElement("img");
        newNode.src = filesUrl[i];
        newNode.alt = "포스팅 이미지";
        newNode.style.maxWidth = "100%";

        const targetElement = document.getElementById("contentEditable");
        targetElement && targetElement.appendChild(newNode);
      }
    }
  }

  //   이미지 base64 변환 후 텍스트 + 이미지 모두 전달하는 방법
  //   const handleImageChange = () => {
  //     if (
  //       fileInputRef.current &&
  //       fileInputRef.current.files &&
  //       fileInputRef.current.files.length > 0
  //     ) {
  //       const files = fileInputRef.current.files;

  //       for (let i = 0; i < files.length; i++) {
  //         const file = files[i];
  //         const reader = new FileReader();
  //         reader.onloadend = () => {
  //           if (reader.result) {
  //             const imgTag = `<img src="${reader.result}" alt="Selected" style="max-width: 100%;" />`;
  //             const selection = window.getSelection();
  //             if (selection && selection.getRangeAt && selection.rangeCount) {
  //               const range = selection.getRangeAt(0);
  //               const newNode = range.createContextualFragment(imgTag);
  //               range.insertNode(newNode);
  //             }
  //             const contentContainer =
  //               document.getElementById("contentContainer");
  //             if (contentContainer) {
  //               contentContainer.innerHTML += imgTag;
  //             }
  //           }
  //         };
  //         reader.readAsDataURL(file);
  //       }
  //     }
  //   };

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
        <Text>{fileCount}/10</Text>
      </Flex>
      <Spacer />
      <KeyboardIcon />
    </HStack>
  );
}

export default KeyboardFixedElement;
