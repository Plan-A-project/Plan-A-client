import { ChangeEvent, useEffect, useState } from "react";

import {
  ChakraProps,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const formProps: ChakraProps = {
  border: "none",
  borderBottom: "1px solid",
  borderColor: "gray.100",
  borderRadius: 0,
  _focus: { borderColor: "gray.300" },
  px: 2,
};

const inputProps: ChakraProps = {
  ...formProps,
  py: 2,
};

interface IPostForm {
  email: string;
  requestDto: {
    title: string;
    main: string;
    enterprise: string;
    startDate: string;
    endDate: string;
  };
}

interface RecruitingPostFormProps {
  formData: IPostForm;
  setFormData: React.Dispatch<React.SetStateAction<IPostForm>>;
}

function RecruitingPostForm({
  formData,
  setFormData,
}: RecruitingPostFormProps) {
  const {
    requestDto: { title, main, enterprise, startDate, endDate },
  } = formData;

  function setTitle(e: ChangeEvent<HTMLElement>) {
    const { value } = e.target as HTMLInputElement;
    setFormData(prevData => ({
      ...prevData,
      requestDto: { ...prevData.requestDto, title: value },
    }));
  }
  function setMain(e: ChangeEvent<HTMLElement>) {
    const { value } = e.target as HTMLInputElement;
    setFormData(prevData => ({
      ...prevData,
      requestDto: { ...prevData.requestDto, main: value },
    }));
  }
  function setEnterprise(e: ChangeEvent<HTMLElement>) {
    const { value } = e.target as HTMLInputElement;
    setFormData(prevData => ({
      ...prevData,
      requestDto: { ...prevData.requestDto, enterprise: value },
    }));
  }
  function setStartDate(date: string) {
    setFormData(prevData => ({
      ...prevData,
      requestDto: { ...prevData.requestDto, startDate: date },
    }));
  }
  function setEndDate(date: string) {
    setFormData(prevData => ({
      ...prevData,
      requestDto: { ...prevData.requestDto, endDate: date },
    }));
  }

  return (
    <FormControl p={2}>
      <CustomFormLabel>모집 공고</CustomFormLabel>
      <CustomInputText
        value={title}
        setValue={setTitle}
        placeholder={"모집 공고의 제목을 입력해 주세요."}
      />
      <Divider />
      <CustomFormLabel>기업/기관</CustomFormLabel>
      <CustomInputText
        value={enterprise}
        setValue={setEnterprise}
        placeholder={"기업/기관의 이름을 입력해주세요."}
      />
      <CustomFormLabel>모집 기간</CustomFormLabel>
      <HStack fontSize={"xs"}>
        <DateInput date={startDate} setDate={setStartDate} />
        <Text>~</Text>
        <DateInput date={endDate} setDate={setEndDate} />
      </HStack>
      <CustomFormLabel>상세 내용</CustomFormLabel>
      <CustomTextarea
        value={main}
        setValue={setMain}
        placeholder={"모집 상세 내용을 최대한 자세히 입력해 주세요."}
      />
    </FormControl>
  );
}

function CustomFormLabel({ children }: { children: React.ReactNode }) {
  return (
    <FormLabel fontSize={"sm"} color="gray.600" p={0} m={0} mt={2}>
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
  setValue: (e: ChangeEvent<HTMLElement>) => void;
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
      p={0}
      m={0}
      mb={2}
      _focus={{ border: "none" }}
    />
  );
}

function CustomTextarea({
  value,
  setValue,
  placeholder,
}: {
  value: string;
  setValue: (e: ChangeEvent<HTMLElement>) => void;
  placeholder: string;
}) {
  return (
    <Textarea
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      border={"none"}
      outline={"none"}
      mt={2}
      flex={1}
      resize={"none"}
      lineHeight={5}
      rows={13}
      p={0}
      sx={{ boxShadow: "none !important" }}
    />
  );
}

function DateInput({
  setDate,
}: {
  date: string;
  setDate: (date: string) => void;
}) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [day, setDay] = useState(today.getDate());

  useEffect(() => {
    setDate(`${year}-${month}-${day}`);
  }, [year, month, day]);

  return (
    <HStack>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Input
          type="number"
          name="year"
          value={year}
          onChange={e => setYear(parseInt(e.target.value))}
          placeholder={year.toString()}
          required
          border={"none"}
          size="xs"
          p={0}
        />
        <Text>년</Text>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Input
          type="number"
          name="month"
          value={month}
          onChange={e => setMonth(parseInt(e.target.value) + 1)}
          placeholder={month.toString()}
          required
          border={"none"}
          size="xs"
          p={0}
        />
        <Text>월</Text>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Input
          type="number"
          name="day"
          value={day}
          onChange={e => setDay(parseInt(e.target.value))}
          placeholder={day.toString()}
          required
          border={"none"}
          size="xs"
          p={0}
        />
        <Text>일</Text>
      </Flex>
    </HStack>
  );
}

export default RecruitingPostForm;
