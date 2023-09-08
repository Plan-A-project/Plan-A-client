import React, { useEffect, useRef } from "react";

import { Box, Divider } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";

import KeyboardFixedElement from "@/components/common/KeyboardFixedElement";
import { IPostContent } from "@/state/atoms/posting/postingAtom";

import { IPostForm } from "./RecruitingPostForm";

export default function GeneralPostForm({
  postContent,
  setPostContent,
  setBtnActive,
}: IPostForm) {
  const editableDivRef = useRef<HTMLDivElement | null>(null);
  const { title, content } = postContent;
  const _placeholder = "내용을 입력하세요.";

  // 포스팅 제목 갱신
  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      title: e.target.value,
    }));
  }

  // 모킹 placeholder 및 내용 갱신
  function handlePlaceholderChange(
    event: React.SyntheticEvent<HTMLDivElement>,
  ) {
    const _content = event?.currentTarget.innerHTML;
    if (
      event.type === "focus" &&
      (_content === _placeholder || _content === "")
    ) {
      event.currentTarget.innerHTML = "";
    } else if (
      event.type === "blur" &&
      (_content === "" || _content === _placeholder)
    ) {
      event.currentTarget.innerHTML = _placeholder;
    }
    // } else if (content || _content === "") {
    //   event.currentTarget.innerHTML = _placeholder;
    // }
  }

  // 포스팅 내용 갱신
  function handleContentChange(content: string | undefined) {
    content &&
      setPostContent((prevData: IPostContent) => ({
        ...prevData,
        content: content,
      }));
  }

  // content editable div innerHTML 변경 감지 옵저버 등록
  useEffect(() => {
    const observerCallback: MutationCallback = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "childList" ||
          mutation.type === "characterData"
        ) {
          handleContentChange(editableDivRef.current?.innerHTML);
        }
      }
    };
    const observer = new MutationObserver(observerCallback);
    if (editableDivRef.current) {
      const observerConfig: MutationObserverInit = {
        childList: true,
        subtree: true,
        characterData: true,
      };
      observer.observe(editableDivRef.current, observerConfig);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  // 등록 버튼 활성화 조건
  useEffect(() => {
    const { title, content } = postContent;
    title && content !== _placeholder
      ? setBtnActive(true)
      : setBtnActive(false);
  }, [postContent]);

  useEffect(() => {
    if (content) {
      editableDivRef.current!.innerHTML = content;
    }
  }, []);

  return (
    <Box>
      <Input
        flexShrink={0}
        variant={"unstyled"}
        h={9}
        mt={3}
        value={title}
        placeholder={"제목을 입력하세요."}
        onChange={setTitle}
      />
      <Divider />
      <Box
        id="contentEditable"
        contentEditable
        mt={2}
        lineHeight={5}
        _focus={{ outline: 0 }}
        sx={{ boxShadow: "none !important" }}
        onBlur={handlePlaceholderChange}
        ref={editableDivRef}
        onFocus={handlePlaceholderChange}
      >
        {_placeholder}
      </Box>
      <KeyboardFixedElement />
    </Box>
  );
}
