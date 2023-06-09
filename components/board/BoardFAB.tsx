import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type BoardFABProps = {
  right?: number;
  bottom?: number;
  onClick?: () => void;
};

const BoardFAB: React.FC<BoardFABProps> = ({ right, bottom, onClick }) => {
  return (
    <IconButton
      aria-label="게시글 작성"
      bg="primary.500"
      _hover={{ bg: "primary.600" }}
      _active={{ bg: "primary.700" }}
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
