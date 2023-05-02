import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

type BoardFABProps = {
  right?: number;
  bottom?: number;
  onClick?: () => void;
};

const BoardFAB: React.FC<BoardFABProps> = ({ right, bottom, onClick }) => {
  return (
    <IconButton
      aria-label="게시글 작성"
      bg="blue.400"
      _hover={{ bg: "blue.500" }}
      _active={{ bg: "blue.600" }}
      color={"white"}
      borderRadius={"full"}
      w={10}
      h={10}
      icon={<AddIcon />}
      position={"fixed"}
      right={right || 4}
      bottom={bottom || 4}
      onClick={onClick}
    />
  );
};

export default BoardFAB;
