import { PropsWithChildren } from "react";

import { Divider, Stack } from "@chakra-ui/react";

const BoardCommentList: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack spacing={0} divider={<Divider />}>
      {children}
    </Stack>
  );
};

export default BoardCommentList;
