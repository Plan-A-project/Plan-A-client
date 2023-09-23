import { ReactNode } from "react";

import { Box } from "@chakra-ui/layout";

import Header from "./Header";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Box pb={"52px"}>{children}</Box>
      <Navbar />
    </>
  );
}
