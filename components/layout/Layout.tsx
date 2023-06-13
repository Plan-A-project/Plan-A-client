import { ReactNode } from "react";


import { Header } from "./Header";

import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
}
