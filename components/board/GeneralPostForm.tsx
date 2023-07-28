import React, { useRef } from "react";

import { Box } from "@chakra-ui/layout";
import { ChakraProps, Input } from "@chakra-ui/react";

import KeyboardFixedElement from "@/components/common/KeyboardFixedElement";
import { IRecruitmentPostContent } from "@/state/atoms/posting/recruitmentPostingContentAtom";

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
    setPostContent((prevData: IRecruitmentPostContent) => ({
      ...prevData,
      request: {
        ...prevData,
        title: e.target.value, // 새로운 title 값으로 업데이트
      },
    }));
  }
  function setContent(d: any) {
    setPostContent((prevData: IRecruitmentPostContent) => ({
      ...prevData,
      request: {
        ...prevData,
        content: d, // 새로운 title 값으로 업데이트
      },
    }));
  }

  function handleContentChange(event: React.SyntheticEvent<HTMLDivElement>) {
    const newContent = event.currentTarget.innerHTML;
    setContent(newContent);
  }
  const { title, content } = postContent;

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
      />
      <KeyboardFixedElement />
    </Box>
  );
}

export default GeneralPostForm;
