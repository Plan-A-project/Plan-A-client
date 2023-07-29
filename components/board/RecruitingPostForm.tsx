import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import {
  Box,
  GridItem,
  Flex,
  Grid,
  HStack,
  Text,
  Divider,
} from "@chakra-ui/layout";
import { ChakraProps, FormLabel, Input } from "@chakra-ui/react";

import KeyboardFixedElement from "@/components/common/KeyboardFixedElement";
import { IPostContent } from "@/state/atoms/posting/postingAtom";
import { deFormatDate } from "@/utils/date";

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

export type IPostForm = {
  postId?: number;
  boardId: number;
  postContent: IPostContent;
  setPostContent: (newValue: any) => void;
};

export default function RecruitingPostForm({
  postId,
  boardId,
  postContent,
  setPostContent,
}: IPostForm) {
  const editableDivRef = useRef<HTMLDivElement | null>(null);

  const {
    title,
    content,
    recruitment: { companyName, startDate, endDate },
  } = postContent;

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

  function setEnterprise(e: React.ChangeEvent<HTMLInputElement>) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      recruitment: {
        ...prevData.recruitment,
        companyName: e.target.value,
      },
    }));
  }

  function setStartDate(date: string) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      recruitment: {
        ...prevData.recruitment,
        startDate: date,
      },
    }));
  }

  function setEndDate(date: string) {
    setPostContent((prevData: IPostContent) => ({
      ...prevData,
      recruitment: {
        ...prevData.recruitment,
        endDate: date,
      },
    }));
  }

  function handleContentChange(event: React.SyntheticEvent<HTMLDivElement>) {
    if (content === "Type Something")
      setPostContent((prevData: IPostContent) => ({
        ...prevData,
        content: "", // postId 업데이트
      }));
    else if (content === "")
      setPostContent((prevData: IPostContent) => ({
        ...prevData,
        content: "Type Something", // postId 업데이트
      }));

    const newContent = event?.currentTarget.innerHTML;
    setContent(newContent);
  }

  return (
    <Grid gap={3} p={2}>
      <GridItem>
        <CustomFormLabel>모집 공고</CustomFormLabel>
        <CustomInputText
          flexShrink={0}
          h={9}
          mt={3}
          {...inputProps}
          placeholder="모집 공고의 제목을 입력해 주세요."
          value={title}
          setValue={setTitle}
        />
        <Divider />
      </GridItem>
      <GridItem>
        <CustomFormLabel>기업/기관</CustomFormLabel>
        <CustomInputText
          flexShrink={0}
          h={9}
          mt={3}
          value={companyName}
          {...inputProps}
          placeholder="기업/기관의 이름을 입력해주세요."
          setValue={setEnterprise}
        />
        <Divider />
      </GridItem>
      <GridItem>
        <CustomFormLabel>모집 기간</CustomFormLabel>
        <HStack fontSize={"xs"} p={2}>
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
      </GridItem>
      <KeyboardFixedElement />
    </Grid>
  );
}

function CustomFormLabel({ children }: { children: React.ReactNode }) {
  return (
    <FormLabel fontSize={"sm"} color="gray.600" px={3} m={0}>
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
      px={3}
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
      debugger;
      year && month && day && setDate(_deformattedDate);
    }
  }, [year, month, day]); // TODO: Date 객체로 변경하기

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
