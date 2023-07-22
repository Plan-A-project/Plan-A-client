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
import { IGatherPostContent } from "@/state/atoms/posting/gatherPostingContentAtom";

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
  postContent: IGatherPostContent;
  setPostContent: (newValue: any) => void;
};

export default function GeneralPostForm({
  postContent,
  setPostContent,
}: IGeneralPostForm) {
  const editableDivRef = useRef<HTMLDivElement | null>(null);

  const {
    body: {
      requestDto: { title, main, enterprise, startDate, endDate },
    },
  } = postContent;

  console.log("gather postContent", postContent);

  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setPostContent((prevData: IGatherPostContent) => ({
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
    setPostContent((prevData: IGatherPostContent) => ({
      ...prevData,
      body: {
        ...prevData.body,
        requestDto: {
          ...prevData.body.requestDto,
          main: d,
        },
      },
    }));
  }

  function setEnterprise(e: React.ChangeEvent<HTMLInputElement>) {
    setPostContent((prevData: IGatherPostContent) => ({
      ...prevData,
      body: {
        ...prevData.body,
        requestDto: {
          ...prevData.body.requestDto,
          enterprise: e.target.value,
        },
      },
    }));
  }

  function setStartDate(date: string) {
    setPostContent((prevData: IGatherPostContent) => ({
      ...prevData,
      body: {
        ...prevData.body,
        requestDto: {
          ...prevData.body.requestDto,
          startDate: date,
        },
      },
    }));
  }

  function setEndDate(date: string) {
    setPostContent((prevData: IGatherPostContent) => ({
      ...prevData,
      body: {
        ...prevData.body,
        requestDto: {
          ...prevData.body.requestDto,
          endDate: date,
        },
      },
    }));
  }

  function handleContentChange(event: React.SyntheticEvent<HTMLDivElement>) {
    const newContent = event.currentTarget.innerHTML;
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
          value={enterprise}
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
          lineHeight={5}
          {...inputProps}
          _focus={{ outline: 0 }}
          sx={{ boxShadow: "none !important" }}
          onBlur={handleContentChange}
          onInput={handleContentChange}
          ref={editableDivRef}
          p={3}
          // placeholder 모집 상세 내용을 최대한 자세히 입력해 주세요.
        />
      </GridItem>
      <KeyboardFixedElement postId={postContent.postId || 0} />
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
    setDate(`${year}-${month}-${day}`);
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
