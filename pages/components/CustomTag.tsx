import { Tag } from "@chakra-ui/react";

interface CustomTagProps {
  title: string;
  background: string;
  color: string;
}

const CustomTag = ({ title, background, color }: CustomTagProps) => {
  return (
    <Tag
      w={"fit-content"}
      background={background}
      color={color}
      textStyle={"caption1"}
      p={"4px 11.5px"}
    >
      {title}
    </Tag>
  );
};

export default CustomTag;
