import { Button } from "@chakra-ui/react";

type BoxButtonProps = {
  btnContent: string;
  type: string;
  onOpen: () => void;
};
const BoxButton: React.FC<BoxButtonProps> = ({ onOpen, btnContent, type }) => {
  return (
    <Button
      variant={"solid"}
      mx={4}
      bg={"grey.200"}
      color={"grey.900"}
      onClick={onOpen}
      width={"calc(100vw - 2*1rem)"}
      borderRadius={"16px"}
    >
      {btnContent}
    </Button>
  );
};

export default BoxButton;
