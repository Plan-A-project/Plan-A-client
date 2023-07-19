import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import {
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function RecruitingPostForm({
  setBtnActive,
}: {
  setBtnActive: Dispatch<SetStateAction<boolean>>;
}) {
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [desc, setDesc] = useState("");

  const [startDate, setStartDate] = useState({
    year: "2023",
    month: "05",
    day: "05",
  });

  const [endDate, setEndDate] = useState({
    year: "2023",
    month: "05",
    day: "05",
  });

  useEffect(() => {
    title && organization && desc && startDate && endDate
      ? setBtnActive(true)
      : setBtnActive(false);
  }, [title, organization, desc, startDate, endDate]);

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
        value={organization}
        setValue={setOrganization}
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
        value={desc}
        setValue={setDesc}
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
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={e => setValue(e.target.value)}
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
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}) {
  return (
    <Textarea
      value={value}
      onChange={e => setValue(e.target.value)}
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
  date,
  setDate,
}: {
  date: {
    year: string;
    month: string;
    day: string;
  };
  setDate: Dispatch<
    SetStateAction<{
      year: string;
      month: string;
      day: string;
    }>
  >;
}) {
  function handledateChange(event: ChangeEvent<HTMLElement>) {
    const { name, value } = event.target as HTMLInputElement;
    setDate(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <HStack>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Input
          type="number"
          name="year"
          value={date.year}
          onChange={handledateChange}
          placeholder={date.year}
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
          value={date.month}
          onChange={handledateChange}
          placeholder={date.month}
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
          value={date.day}
          onChange={handledateChange}
          placeholder={date.day}
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
