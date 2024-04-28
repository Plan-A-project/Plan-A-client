import { ReactNode } from "react";

import { Box } from "@chakra-ui/layout";

import Header from "./Header";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
  currentTab: string;
}

export default function Layout({ children, currentTab }: Props) {
  return (
    <>
      <Header />
      <Box pb={"52px"}>{children}</Box>
      <Navbar currentTab={currentTab} />
    </>
  );
}
