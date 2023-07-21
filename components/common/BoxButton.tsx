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
      bg={"grey.200"}
      color={"grey.900"}
      onClick={onOpen}
      width="full"
      borderRadius={"8px"}
    >
      {btnContent}
    </Button>
  );
};

export default BoxButton;
