import { Flex, Switch, Text } from "@chakra-ui/react";

type BoardCheckOptionProps = {
  label: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
};

const BoardCheckOption: React.FC<BoardCheckOptionProps> = ({
  label,
  onChange,
  value,
}) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.checked);
  }

  return (
    <Flex
      justify={"space-between"}
      py={4}
      px={1.5}
      borderBottom={"1px solid"}
      borderColor={"gray.100"}
    >
      <Text fontSize={"sm"}>{label}</Text>
      <Switch checked={value} onChange={handleChange} />
    </Flex>
  );
};

export default BoardCheckOption;
