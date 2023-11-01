import { PropsWithChildren } from "react";

import {
  Box,
  Divider,
  Stack,
  StackDivider,
  StackProps,
} from "@chakra-ui/react";

interface BoardStackProps extends StackProps {
  isEventReview: boolean;
}

const BoardStack: React.FC<PropsWithChildren<BoardStackProps>> = ({
  children,
  isEventReview,
  ...props
}) => {
  return (
    <Stack
      spacing={0}
      divider={
        isEventReview ? (
          <Box
            position={"relative"}
            left={"-16px"}
            w={"100vw"}
            h={2}
            bg={"grey.50"}
            borderBottom={0}
          /> // isEventReview가 true일 때 사용할 컴포넌트
        ) : (
          <StackDivider borderColor={"gray.100"} />
        ) // isEventReview가 false일 때 사용할 컴포넌트
      }
      {...props}
    >
      {children}
    </Stack>
  );
};

export default BoardStack;
