import { Box, Flex, Text } from "@chakra-ui/layout";
import IconForward from "@/components/icons/IconForward";
import IconNoticeMark from "@/components/icons/IconNoticeMark";
import { BoxProps } from "@chakra-ui/layout";

type AlertBannerProps = BoxProps & {
  text: string;
  notice?: string;
};

const NoticeBanner: React.FC<AlertBannerProps> = ({
  text,
  notice,
  ...props
}) => {
  return (
    <Box
      w={"100%"}
      minH={"72px"}
      alignItems={"stretch"}
      display={"flex"}
      bg={"white"}
      borderRadius={"16px"}
      p={3}
      border={"1px solid #00AB9A"}
      {...props}
    >
      <Flex align="center" flex={1} flexShrink={0} {...props}>
        <IconNoticeMark color="#00AB9A" />
        <Text mx={2} textStyle="caption2" whiteSpace={"pre-wrap"}>
          {notice}
        </Text>
        <Text mr={3} textStyle="subtitle1" textAlign={"left"} flex={1}>
          {text}
        </Text>

        <IconForward />
      </Flex>
    </Box>
  );
};
export default NoticeBanner;
