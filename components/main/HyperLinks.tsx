import { Text, Flex, Image, Link, Box } from "@chakra-ui/react";

const linkData = [
  {
    Icon: "/assets/2.svg",
    text: "E-Hall",
    link: "http://ehall.fudan.edu.cn",
  },
  {
    Icon: "/assets/Icon.jpg",
    text: "E-learning",
    link: "https://elearning.fudan.edu.cn/",
  },
  {
    Icon: "/assets/4.svg",
    text: "JWFW",
    link: "https://jwfw.fudan.edu.cn/",
  },
  {
    Icon: "/assets/5.svg",
    text: "XK",
    link: "https://xk.fudan.edu.cn/",
  },
  {
    Icon: "/assets/6.svg",
    text: "E-mail",
    link: "https://mail.fudan.edu.cn/",
  },
];

export default function HyperLinks() {
  return (
    <Flex justifyContent={"space-between"}>
      {linkData.map(({ Icon, text, link }) => {
        return (
          <Link href={link} key={text}>
            <Box
              boxShadow={"0px 4px 16px rgba(48, 49, 54, 0.1)"}
              borderRadius={"12px"}
              bg={"#FFFFFF"}
              padding={"8px"}
              gap={"8px"}
            >
              <Image src={Icon} alt={text} boxSize="auto" />
            </Box>
            <Text align="center" fontSize="12px">
              {text}
            </Text>
          </Link>
        );
      })}
    </Flex>
  );
}
