import Image from "next/image";
import { Icons } from "@/assets/icons";
import {
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Center,
  HStack,
  VStack,
  Text,
  Grid,
  Box,
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  Stack,
  Radio,
  RadioGroup,
  Divider,
} from "@chakra-ui/react";
import { useState, SetStateAction, ChangeEvent } from "react";
import Picker from "rmc-picker/lib/Picker";
import "rmc-picker/assets/index.css";

export default function Main() {
  return (
    <Grid p="16px">
      <Semester />
      <Timetable />
      <Searchbar />
      <ReviewButton />
      <SearchResult />
      <BottomDrawer />
      <WriteComment />
    </Grid>
  );
}

type ISScrollablePicker = {
  values: number[];
};

function ScrollablePicker({ values }: ISScrollablePicker) {
  const [value, setValue] = useState();

  const onChange = (value: number) => {
    console.log("value: ", value, values[value]);
  };

  const getItems = (start: number) => {
    const items = [];
    for (let i = start; i < start + values.length; i++) {
      items.push(
        <Picker.Item value={i} key={i}>
          {values[i]}
        </Picker.Item>
      );
    }
    return items;
  };
  const [items, setItems] = useState(getItems(0));

  return (
    <Picker
      selectedValue={value}
      onValueChange={onChange}
      // onScrollChange={this.onScrollChange}
    >
      {items}
    </Picker>
  );
}

function Semester() {
  const [sem, setSem] = useState("1학년 1학기");
  return (
    <HStack>
      <DropDown setSem={setSem} />
    </HStack>
  );
}

type TDropDown = {
  setSem: React.Dispatch<SetStateAction<string>>;
};

function DropDown({ setSem }: TDropDown) {
  function handleInput(e: ChangeEvent) {
    setSem((e.target as HTMLSelectElement).value);
  }
  return (
    <Select
      onChange={handleInput}
      border="none"
      _focusVisible={{
        outline: "none",
      }}
      p="0"
      m="0"
    >
      <option value="1학년 1학기">1학년 1학기</option>
      <option value="1학년 2학기">1학년 2학기</option>
      <option value="2학년 1학기">2학년 1학기</option>
      <option value="2학년 2학기">2학년 2학기</option>
      <option value="3학년 1학기">3학년 1학기</option>
      <option value="3학년 2학기">3학년 2학기</option>
      <option value="4학년 1학기">4학년 1학기</option>
      <option value="4학년 2학기">4학년 2학기</option>
    </Select>
  );
}

function Timetable() {
  return (
    <>
      {data ? (
        <Center bg="#F8F8F8" p={4}>
          <TimeTableContent />
        </Center>
      ) : (
        <Center bg="#F8F8F8" p={4} h="70vh">
          <Text>
            시간표가 비어있어요. <br />
            아래에서 강의를 검색하고 <br />
            추가해보세요!
          </Text>
        </Center>
      )}
    </>
  );
}

// 강의교시, 강의시간 순서로 들어온다고 가정
const data = [
  {
    강의명: "영어1",
    강의번호: "1122",
    강의요일: "월",
    강의장소: "네모관 105",
    강의교수명: "김주연",
    강의교시: 2,
    강의시간: 2,
    강의별점: 4,
  },
  {
    강의명: "동아시아신화기행",
    강의번호: "1122",
    강의요일: "월",
    강의장소: "네모관 105",
    강의교수명: "김주연",
    강의교시: 6,
    강의시간: 2,
    강의별점: 4,
  },
  {
    강의명: "글쓰기1",
    강의번호: "1122",
    강의요일: "화",
    강의장소: "네모관 105",
    강의교수명: "김주연",
    강의교시: 3,
    강의시간: 1,
    강의별점: 4,
  },
  {
    강의명: "경영학개론",
    강의번호: "1122",
    강의요일: "월",
    강의장소: "네모관 105",
    강의교수명: "김주연",
    강의교시: 6,
    강의시간: 1,
    강의별점: 4,
  },
];

// react week calendar
// https://github.com/oliger/react-week-calendar

// adabil/react-scheduler
// https://codesandbox.io/s/nice-hamilton-nfgbl2?file=/src/App.tsx:571-580

function TimeTableContent() {
  // 클릭된 강의 상태관리

  for (let i = 0; i < data.length; i++) {
    const 요일 = data[i]["강의요일"];
    const 교시 = data[i]["강의교시"];
    const 시간 = data[i]["강의시간"];
  }

  // 버전충돌...
  // https://codesandbox.io/s/element3-wwxt5?file=/src/App.js:79-88
  return (
    <TableContainer w="100%">
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>월</Th>
            <Th>화</Th>
            <Th>수</Th>
            <Th>목</Th>
            <Th>금</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(13).keys()].map((i) => (
            <Tr key={i}>
              <Td>{i + 1}</Td>
              <Td>우</Td>
              <Td>어</Td>
              <Td>아</Td>
              <Td>이</Td>
              <Td>호</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Searchbar() {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Image src={Icons.Search} alt="시간표 검색바" color="gray.300" />
      </InputLeftElement>
      <Input type="text" placeholder="강의명 혹은 강의번호를 검색해주세요." />
    </InputGroup>
  );
}

function ReviewButton() {
  return (
    <Center>
      <Button borderRadius="md" colorScheme="gray">
        후기작성
      </Button>
    </Center>
  );
}

function SearchResult() {
  return (
    <VStack>
      <ClassCard />
      <ClassCard />
      <ClassCard />
    </VStack>
  );
}

function ClassCard() {
  return (
    <Flex w="100%" gap={3}>
      <Box bg="#F8F8F8" p={4} flex="1">
        <HStack>
          <Text>미시경제원론</Text>
          <Flex>
            <Image src={Icons.Star} alt="rating" />
            4.5 / 4.0
          </Flex>
        </HStack>
        <div>수 11:00~1:00</div>
        <div>정경대 104호 / 강준호</div>
      </Box>
      <Button h="100%" bg="gray.300">
        추가
      </Button>
    </Flex>
  );
}

function WriteComment() {
  return (
    <Stack border="1px" borderColor="gray.200" p={4} w="100%">
      <Flex>
        <Text>수강시기</Text>
        <ScrollablePicker values={[2021, 2022, 2023, 2024, 2025]} />
        <Center>학년도</Center>
        <ScrollablePicker values={[1, 2]} />
        <Center>학기</Center>
      </Flex>
      <Divider />
      <HStack>
        <Text>별점</Text>
        <Text>4 / 5</Text>
        <HStack gap={1}>
          <Image src={Icons.StarBig} alt="rating" />
          <Image src={Icons.StarBig} alt="rating" />
          <Image src={Icons.StarBig} alt="rating" />
          <Image src={Icons.StarBig} alt="rating" />
          <Image src={Icons.StarEmpty} alt="rating" />
        </HStack>
      </HStack>
      <Divider />
      <Box>
        <Text>수강후기</Text>
        <p>해당 강의를 실제로 수강한 학생이 작성한 후기입니다.</p>
        <p>해당 강의를 실제로 수강한 학생이 작성한 후기입니다.</p>
        <p>해당 강의를 실제로 수강한 학생이 작성한 후기입니다.</p>
      </Box>
      <HStack>
        <Button w="100%">취소</Button>
        <Button w="100%">확인</Button>
      </HStack>
    </Stack>
  );
}

function BottomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="gray" onClick={onOpen}>
        Open Bottom Drawer
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius="2xl">
          <DrawerHeader>
            시간표 편집
            <Text fontSize="sm">중복된 과목 중 하나만 선택해주세요.</Text>
          </DrawerHeader>
          <DrawerBody>
            <RadioGroup defaultValue="1">
              <Stack>
                <Radio size="md" name="1">
                  <Box p={4} flex="1">
                    <div>미시경제원론</div>
                    <div>수 11:00~1:00</div>
                    <div>정경대 104호 / 강준호</div>
                  </Box>
                </Radio>
                <Radio size="md" name="2">
                  <Box p={4} flex="1">
                    <div>미시경제원론</div>
                    <div>수 11:00~1:00</div>
                    <div>정경대 104호 / 강준호</div>
                  </Box>
                </Radio>
                <Radio size="md" name="3">
                  <Box p={4} flex="1">
                    <div>미시경제원론</div>
                    <div>수 11:00~1:00</div>
                    <div>정경대 104호 / 강준호</div>
                  </Box>
                </Radio>
                <Button bg="gray.300">편집 완료</Button>
              </Stack>
            </RadioGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
