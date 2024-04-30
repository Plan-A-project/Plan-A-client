import React, { useEffect, useRef, ChangeEvent, useState } from "react";

import { Box, Divider, GridItem, Grid } from "@chakra-ui/layout";
import { Input, FormLabel, Select } from "@chakra-ui/react";

import KeyboardFixedElement from "@/components/common/KeyboardFixedElement";
import { IPostContent } from "@/state/atoms/posting/postingAtom";
import { useRecoilState } from "recoil";
import { updatePostingAtom } from "@/state/atoms/posting/postingAtom";
import { IPostForm } from "./RecruitingPostForm";

export default function GeneralPostForm({
  postContent,
  boardId,
  postType,
  setPostContent,
  setBtnActive,
}: IPostForm) {
  const editableDivRef = useRef<HTMLDivElement | null>(null);
  const { title, content } = postContent;
  const [tempTitle, setTempTitle] = useState(" ");
  const _placeholder = "내용을 입력하세요.";
  const [updatePosting, setUpdatePosting] = useRecoilState(updatePostingAtom);
  const [theme, setTheme] = useState("분야를 꼭 선택해주세요."); // State to store the selected theme
  // 포스팅 제목 갱신

  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    const titleArray = postContent["title"].split("$%$%$%");
    let finalTitle = e.target.value;
    if (titleArray.length != 1) {
      const newTitle = [...titleArray]; // 배열 복사
      newTitle[0] = e.target.value;
      finalTitle = newTitle[0] + "$%$%$%" + newTitle[1];
    }

    setTempTitle(e.target.value);
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      title: finalTitle,
    }));
  }
  function handleTheme(e: any) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      title: `${tempTitle}$%$%$%${e.target.value}`,
    }));
    setTheme(e.target.value);
  }
  function setPrice(e: React.ChangeEvent<HTMLInputElement>) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      title: `${tempTitle}$%$%$%${e.target.value}`,
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
    if (content && updatePosting) {
      editableDivRef.current!.innerHTML = content;

      setUpdatePosting(false);
    }
  }, []);
  function CustomFormLabel({ children }: { children: React.ReactNode }) {
    return (
      <FormLabel fontSize={"m"} color="gray.600" m={0}>
        {children}
      </FormLabel>
    );
  }

  return (
    <Box>
      <Input
        flexShrink={0}
        variant={"unstyled"}
        h={9}
        mt={3}
        value={updatePosting ? title.split("$%$%$%")[0] : undefined}
        placeholder={"제목을 입력하세요."}
        onChange={setTitle}
      />
      {boardId == 5 && postType == "NORMAL" && (
        <GridItem mt={3}>
          <CustomFormLabel>금액</CustomFormLabel>
          <Input
            flexShrink={0}
            variant={"unstyled"}
            h={9}
            value={updatePosting ? title.split("$%$%$%")[1] : undefined}
            placeholder={"금액을 입력하세요.(위안화 숫자만 입력/ex: 300)"}
            onChange={setPrice}
          />
          <Divider />
        </GridItem>
      )}
      {boardId == 2 && (
        <GridItem mt={3} mb={6}>
          <CustomFormLabel>분야를 선택하세요.</CustomFormLabel>
          <Select
            // Placeholder text for the select input
            value={updatePosting ? title.split("$%$%$%")[1] : theme} // Current value of the select input
            onChange={handleTheme} // Function to handle select input changes
          >
            <option value="분야를 꼭 선택해주세요.">
              분야를 꼭 선택해주세요
            </option>
            <option value="건강/운동">건강/운동</option>
            <option value="IT/테크">IT/테크</option>
            <option value="문화/생활">문화/생활</option>
            <option value="인문/철학">인문/철학</option>
            <option value="음악/미술">음악</option>
            <option value="주식/제태크">주식/제태크</option>
            <option value="경제/경영">경제/경영</option>
            <option value="졸업생 인터뷰">졸업생 인터뷰</option>
          </Select>
          {/* <Input
            flexShrink={0}
            variant={"unstyled"}
            h={9}
            value={updatePosting ? title.split("$%$%$%")[1] : undefined}
            placeholder={"금액을 입력하세요.(위안화 숫자만 입력/ex: 300)"}
            onChange={setPrice}
          /> */}
          <Divider />
        </GridItem>
      )}
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
