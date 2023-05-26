import {
  Stack,
  Flex,
  Icon,
  Text,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import { FaSquare } from "react-icons/fa";

import AccountChangeItem from "@/pages/components/AccountChangeItem";
import Header from "@/pages/components/Header";
import PageLayout from "@/pages/components/Layout";

const index = () => {
  const menuItems = [
    { id: 1, title: "이메일", icon: FaSquare },
    { id: 2, title: "위챗 or 카카오톡 아이디", icon: FaSquare },
    { id: 3, title: "닉네임", icon: FaSquare },
    { id: 4, title: "비밀번호", icon: FaSquare },
    { id: 5, title: "탈퇴하기", icon: FaSquare },
  ];
  return (
    <PageLayout>
      <Header headingText="계정 변경" />
      <Stack
        divider={<StackDivider borderColor="gray.200" />}
        px={"16px"}
        mt={"24px"}
      >
        {menuItems.map(item => (
          <AccountChangeItem
            key={item.id}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </Stack>
    </PageLayout>
  );
};

export default index;
