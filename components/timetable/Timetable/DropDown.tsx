import { SetStateAction, ChangeEvent } from "react";
import { Select } from "@chakra-ui/react";

type TDropDown = {
  setSem: React.Dispatch<SetStateAction<string>>;
};

export default function DropDown({ setSem }: TDropDown) {
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
