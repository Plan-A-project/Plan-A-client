import { Button } from "@chakra-ui/react";

type buttonType = {
  isActive: boolean;
  handleClick: () => any;
};

function CreatePostButton({ isActive, handleClick }: buttonType) {
  return isActive ? (
    <Button bg={"none"} color={"blue"} onClick={handleClick}>
      등록
    </Button>
  ) : (
    <Button bg={"none"} color={"gray.200"}>
      등록
    </Button>
  );
}

export default CreatePostButton;
