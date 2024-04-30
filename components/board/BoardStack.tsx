import { PropsWithChildren } from "react";

import {
  Box,
  Divider,
  Stack,
  StackDivider,
  StackProps,
} from "@chakra-ui/react";

interface BoardStackProps extends StackProps {
  isKnowledge?: boolean;
  isMarket?: boolean;
}

const BoardStack: React.FC<PropsWithChildren<BoardStackProps>> = ({
  children,
  isKnowledge,
  ...props
}) => {
  return (
    <Stack
      spacing={0}
      divider={
        isKnowledge ? (
          <StackDivider borderColor={"gray.normal"} />
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
