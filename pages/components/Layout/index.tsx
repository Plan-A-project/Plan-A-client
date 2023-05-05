import React, { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../Footer";

type PageLayoutProps = {
  children: ReactNode;
  footer?: boolean;
};

const PageLayout = ({ children, footer }: PageLayoutProps) => {
  return (
    <Container
      sx={{ "&::-webkit-scrollbar": { display: "none" } }}
      style={{
        width: "375px",
        height: "812px",
        border: "1px solid black",
        // borderBottom: "none",
        overflowY: "scroll",
        padding: 0,
      }}
    >
      <Box>{children}</Box>
      {footer ? <Footer /> : ""}
    </Container>
  );
};

export default PageLayout;
