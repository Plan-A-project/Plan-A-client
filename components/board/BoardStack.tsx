import { Stack, StackDivider, StackProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const BoardStack: React.FC<PropsWithChildren<StackProps>> = ({
  children,
  ...props
}) => {
  return (
    <Stack
      spacing={0}
      divider={<StackDivider borderColor={"gray.100"} />}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default BoardStack;
