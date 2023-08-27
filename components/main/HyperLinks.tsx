import { Text, Flex, Image, Link, Box } from "@chakra-ui/react";

const linkData = [
  {
    Icon: "/assets/2.svg",
    text: "e-hall",
    link: "http://ehall.fudan.edu.cn",
  },
  {
    Icon: "/assets/Icon.jpg",
    text: "e-learning",
    link: "https://elearning.fudan.edu.cn/",
  },
  {
    Icon: "/assets/4.svg",
    text: "jwfw",
    link: "https://jwfw.fudan.edu.cn/",
  },
  {
    Icon: "/assets/5.svg",
    text: "xk",
    link: "https://xk.fudan.edu.cn/",
  },
  {
    Icon: "/assets/6.svg",
    text: "email",
    link: "https://mail.fudan.edu.cn/",
  },
];

export default function HyperLinks() {
  return (
    <Flex justifyContent={"space-between"}>
      {linkData.map(({ Icon, text, link }) => {
        return (
          <Link href={link} key={text}>
            <Flex direction={"column"} align={"center"}>
              <Flex
                justify={"center"}
                boxShadow={"0px 4px 16px rgba(48, 49, 54, 0.1)"}
                borderRadius={"12px"}
                bg={"#FFFFFF"}
                padding={"8px"}
                gap={"8px"}
                w={12}
                h={12}
              >
                <Image src={Icon} alt={text} boxSize="auto" />
              </Flex>
              <Text align="center" fontSize="12px">
                {text}
              </Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
}
