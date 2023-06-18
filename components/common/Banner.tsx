import {
  ForwardRefExoticComponent,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from "react";

import { Box, BoxProps, Flex, FlexProps, Text } from "@chakra-ui/react";

import IconForward from "@/components/icons/IconForward";
import IconNotice from "@/components/icons/IconNotice";
import IconNoticeMark from "@/components/icons/IconNoticeMark";

type BannerComponent = ForwardRefExoticComponent<BannerProps> & {
  TextBanner: typeof TextBanner;
  AlertBanner: typeof AlertBanner;
};

type BannerProps = PropsWithChildren<
  BoxProps & {
    alert?: boolean;
  }
>;

const Banner: BannerComponent = forwardRef<HTMLDivElement, BannerProps>(
  ({ children, alert, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        w={"100%"}
        minH={"72px"}
        p={"0 12px"}
        alignItems={"stretch"}
        display={"flex"}
        bg={"white"}
        borderRadius={"16px"}
        variant="unstyled"
        border={alert ? "1px solid #F90B66" : "none"}
        {...props}
      >
        {children}
      </Box>
    );
  },
) as BannerComponent;

type TextBannerProps = FlexProps & {
  text: string;
  icon?: ReactNode;
};

const TextBanner: React.FC<TextBannerProps> = ({ text, icon, ...props }) => {
  return (
    <Flex align="center" flex={1} flexShrink={0} {...props}>
      {icon || <IconNotice />}

      <Text mx={2} textStyle="subtitle1" textAlign="left" flex={1}>
        {text}
      </Text>

      <IconForward />
    </Flex>
  );
};

type AlertBannerProps = TextBannerProps & {
  notice?: string;
};

const AlertBanner: React.FC<AlertBannerProps> = ({
  text,
  icon,
  notice,
  ...props
}) => {
  return (
    <Flex align="center" flex={1} flexShrink={0} {...props}>
      {icon || <IconNoticeMark />}

      <Text mx={2} textStyle="caption2" whiteSpace={"pre-wrap"}>
        {notice}
      </Text>

      <Text mr={3} textStyle="subtitle1" textAlign="right" flex={1}>
        {text}
      </Text>

      <IconForward />
    </Flex>
  );
};

Banner.displayName = "Banner";
Banner.TextBanner = TextBanner;
Banner.AlertBanner = AlertBanner;

export default Banner;
