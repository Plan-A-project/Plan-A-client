import React, { useRef } from "react";

import { Box } from "@chakra-ui/layout";
import { ChakraProps, Input } from "@chakra-ui/react";

import KeyboardFixedElement from "@/components/common/KeyboardFixedElement";
import { IPostContent } from "@/state/atoms/posting/generalPostingContentAtom";

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

type IGeneralPostForm = {
  postContent: IPostContent;
  setPostContent: (newValue: any) => void;
};

function GeneralPostForm({ postContent, setPostContent }: IGeneralPostForm) {
  const editableDivRef = useRef<HTMLDivElement | null>(null);

  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      body: {
        ...prevData.body,
        requestDto: {
          ...prevData.body.requestDto,
          title: e.target.value, // 새로운 title 값으로 업데이트
        },
      },
    }));
  }
  function setContent(d: any) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      body: {
        ...prevData.body,
        requestDto: {
          ...prevData.body.requestDto,
          main: d, // 새로운 title 값으로 업데이트
        },
      },
    }));
  }

  function handleContentChange(event: React.SyntheticEvent<HTMLDivElement>) {
    const newContent = event.currentTarget.innerHTML;
    setContent(newContent);
  }

  return (
    <Box>
      <Input
        flexShrink={0}
        variant={"unstyled"}
        h={9}
        mt={3}
        value={postContent.body.requestDto.title}
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
      <KeyboardFixedElement postId={postContent.postId || 0} />
    </Box>
  );
}

export default GeneralPostForm;
