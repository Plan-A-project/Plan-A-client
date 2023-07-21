import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

type LoginButtonProps = {
  bgColor: string;
  textColor: string;
  content: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({
  bgColor,
  textColor,
  content,
}) => {
  const router = useRouter();
  return (
    <Flex
      onClick={() => router.push("/login")}
      bg={bgColor}
      flexDirection="column"
      justifyContent="center"
      h="16"
      w={"167px"}
      p={"0px 12px"}
      alignItems="center"
      borderRadius={"16px"}
    >
      <Text textStyle={"subtitle1"} color={textColor}>
        {content}
      </Text>
    </Flex>
  );
};

const BeforeLogin = () => {
  return (
    <Flex justifyContent="space-between">
      <LoginButton
        bgColor={"primary.100"}
        textColor={"primary.900"}
        content={"학생 로그인"}
      />
      <LoginButton
        bgColor={"secondary.100"}
        textColor={"secondary.900"}
        content={"기업 로그인"}
      />
    </Flex>
  );
};

export default BeforeLogin;
