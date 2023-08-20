import React, {
  ChangeEvent,
  Dispatch,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Box,
  GridItem,
  Flex,
  Grid,
  HStack,
  Text,
  Divider,
} from "@chakra-ui/layout";
import { FormLabel, Input } from "@chakra-ui/react";

import KeyboardFixedElement from "@/components/common/KeyboardFixedElement";
import { IPostContent } from "@/state/atoms/posting/postingAtom";
import { deFormatDate } from "@/utils/date";

export type IPostForm = {
  postId?: number;
  boardId: number;
  postContent: IPostContent;
  setPostContent: (newValue: any) => void;
  setBtnActive: Dispatch<React.SetStateAction<boolean>>;
};

export default function RecruitingPostForm({
  postContent,
  setPostContent,
  setBtnActive,
}: IPostForm) {
  const editableDivRef = useRef<HTMLDivElement | null>(null);
  const {
    title,
    content,
    recruitmentCompanyName,
    recruitmentStartDate,
    recruitmentEndDate,
  } = postContent;
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
    if (_content === _placeholder) {
      event.currentTarget.innerHTML = "";
    } else if (_content === "") {
      event.currentTarget.innerHTML = _placeholder;
    }
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

  function setEnterprise(e: React.ChangeEvent<HTMLInputElement>) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      recruitmentCompanyName: e.target.value,
    }));
  }

  function setStartDate(date: string) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      recruitmentStartDate: date,
    }));
  }

  function setEndDate(date: string) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      recruitmentEndDate: date,
    }));
  }

  // 등록 버튼 활성화 조건
  useEffect(() => {
    const { title, content } = postContent;
    title &&
    content &&
    content !== _placeholder &&
    recruitmentCompanyName &&
    recruitmentStartDate &&
    recruitmentEndDate
      ? setBtnActive(true)
      : setBtnActive(false);
  }, [postContent]);

  return (
    <Grid gap={3} p={2}>
      <GridItem>
        <CustomFormLabel>모집 공고</CustomFormLabel>
        <CustomInputText
          placeholder="모집 공고의 제목을 입력해 주세요."
          value={title}
          setValue={setTitle}
        />
        <Divider />
      </GridItem>
      <GridItem>
        <CustomFormLabel>기업/기관</CustomFormLabel>
        <CustomInputText
          value={recruitmentCompanyName as string}
          placeholder="기업/기관의 이름을 입력해주세요."
          setValue={setEnterprise}
        />
        <Divider />
      </GridItem>
      <GridItem>
        <CustomFormLabel>모집 기간</CustomFormLabel>
        <HStack fontSize={"xs"} py={2}>
          <DateInput setDate={setStartDate} />
          <Text>~</Text>
          <DateInput setDate={setEndDate} />
        </HStack>
        <Divider />
      </GridItem>
      <GridItem>
        <CustomFormLabel>상세 내용</CustomFormLabel>
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
      </GridItem>
      <KeyboardFixedElement />
    </Grid>
  );
}

function CustomFormLabel({ children }: { children: React.ReactNode }) {
  return (
    <FormLabel fontSize={"sm"} color="gray.600" m={0}>
      {children}
    </FormLabel>
  );
}

function CustomInputText({
  value,
  setValue,
  placeholder,
}: {
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={setValue}
      value={value}
      border={"none"}
      outline={"none"}
      px={0}
      _focus={{ outline: 0 }}
      _focusVisible={{
        outline: "none",
      }}
    />
  );
}

function DateInput({ setDate }: { setDate: (date: string) => void }) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [day, setDay] = useState(today.getDate());

  useEffect(() => {
    if (year && month && day) {
      const _deformattedDate = deFormatDate(`${year}-${month}-${day}`);
      year && month && day && setDate(_deformattedDate);
    }
  }, [year, month, day]);

  return (
    <HStack>
      <Flex alignItems={"center"} justifyContent={"center"} px={"5px"}>
        <Input
          type="number"
          name="year"
          value={year}
          onChange={e => setYear(parseInt(e.target.value))}
          placeholder={year.toString()}
          required
          border={"none"}
          size="xs"
          maxW="35px"
          padding="0"
        />
        <Text>년</Text>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Input
          type="number"
          name="month"
          value={month}
          onChange={e => setMonth(parseInt(e.target.value) + 1)}
          placeholder={month < 10 ? "0" + month.toString() : month.toString()}
          required
          border={"none"}
          size="xs"
          min={1}
          max={12}
          maxW="18px"
          padding="0"
        />
        <Text>월</Text>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Input
          type="number"
          name="day"
          value={day}
          onChange={e => setDay(parseInt(e.target.value))}
          placeholder={day < 10 ? "0" + day.toString() : day.toString()}
          required
          border={"none"}
          size="xs"
          min={1}
          max={31}
          maxW="18px"
          padding="0"
        />
        <Text>일</Text>
      </Flex>
    </HStack>
  );
}
