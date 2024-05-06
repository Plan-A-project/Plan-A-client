import { ReactNode } from "react";

import { Box } from "@chakra-ui/layout";

import Header from "./Header";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
  currentTab: string;
  bgColor?: string;
}

export default function Layout({
  children,
  currentTab,
  bgColor = "#F7F8FA",
}: Props) {
  const paddingBottom = currentTab == "knowledge" ? "80px" : "52px";
  return (
    <>
      <Header />
      <Box bg={bgColor} pb={paddingBottom}>
        {children}
      </Box>
      <Navbar currentTab={currentTab} />
    </>
  );
}
