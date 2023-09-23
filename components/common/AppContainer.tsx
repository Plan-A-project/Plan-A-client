import { PropsWithChildren } from "react";

import { Box } from "@chakra-ui/react";

interface AppContainerProps extends PropsWithChildren {
  margin?: boolean;
}

const AppContainer: React.FC<AppContainerProps> = ({
  children,
  margin = false,
}) => {
  return (
    <Box maxW={768} m={"0 auto"} px={4}>
      {children}
      {margin && <Box mt={"74px"} />}
    </Box>
  );
};

export default AppContainer;
