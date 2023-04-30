import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box maxW={768} m={"0 auto"} px={4}>
      {children}
    </Box>
  );
};

export default AppContainer;
