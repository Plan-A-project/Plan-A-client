import React, { useEffect, useRef } from "react";

import { Box, Divider } from "@chakra-ui/layout";
import { ChakraProps, Input } from "@chakra-ui/react";

import KeyboardFixedElement from "@/components/common/KeyboardFixedElement";
import { IPostContent } from "@/state/atoms/posting/postingAtom";

import { IPostForm } from "./RecruitingPostForm";

const formProps: ChakraProps = {
  border: "none",
  borderColor: "gray.100",
  borderRadius: 0,
  _focus: { borderColor: "gray.300" },
  px: 2,
};

const inputProps: ChakraProps = {
  ...formProps,
  py: 2,
};

function GeneralPostForm({
  postId,
  boardId,
  postContent,
  setPostContent,
}: IPostForm) {
  const editableDivRef = useRef<HTMLDivElement | null>(null);

  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      title: e.target.value, // 새로운 title 값으로 업데이트
    }));
  }
  function setContent(d: any) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      content: d, // 새로운 title 값으로 업데이트
    }));
  }

  const { title, content } = postContent;
  function handleContentChange(event: React.SyntheticEvent<HTMLDivElement>) {
    if (content === "Type Something")
      setPostContent((prevData: IPostContent) => ({
        ...prevData,
        content: "", // postId 업데이트
      }));
    else if (content === "")
      setPostContent((prevData: IPostContent) => ({
        ...prevData,
        content: "Type Something",
      }));

    const newContent = event?.currentTarget.innerHTML;
    setContent(newContent);
  }

  useEffect(() => {
    if (content) {
      document.querySelector("#contentEditable")!.innerHTML = content;
    }
  }, [content]);

  return (
    <Box>
      <Input
        flexShrink={0}
        variant={"unstyled"}
        h={9}
        mt={3}
        value={title}
        {...inputProps}
        placeholder="제목을 입력해주세요."
        onChange={setTitle}
      />
      <Divider />
      <Box
        id="contentEditable"
        contentEditable
        mt={2}
        lineHeight={5}
        p={2}
        {...inputProps}
        _focus={{ outline: 0 }}
        sx={{ boxShadow: "none !important" }}
        onBlur={handleContentChange}
        onInput={handleContentChange}
        ref={editableDivRef}
        onFocus={handleContentChange}
        placeholder="내용을 입력해주세요."
        _before={{
          content: content ? `""` : "attr(placeholder)",
          color: "gray.500",
          position: "absolute",
        }}
      ></Box>
      <KeyboardFixedElement />
    </Box>
  );
}

export default GeneralPostForm;
