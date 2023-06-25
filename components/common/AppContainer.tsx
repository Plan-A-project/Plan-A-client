import { PropsWithChildren } from "react";

import { Box } from "@chakra-ui/react";

const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box maxW={768} m={"0 auto"} px={4}>
      {children}
    </Box>
  );
};

export default AppContainer;
