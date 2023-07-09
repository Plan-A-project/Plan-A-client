import { MouseEvent } from "react";

import { Flex, Text } from "@chakra-ui/layout";

import IconCamera from "@/components/icons/IconCamera";
import IconKeyboard from "@/components/icons/IconKeyboard";
import useViewport from "@/hooks/useViewport";

type CameraBottomBarProps = {
  onCameraClick?: () => void;
  value?: number;
  max?: number;
};

const CameraBottomBar: React.FC<CameraBottomBarProps> = ({
  onCameraClick,
  value,
  max,
}) => {
  const [, height] = useViewport();

  function handleKeyboardClick(e: MouseEvent<SVGSVGElement>) {
    setTimeout(() => {
      const element = e.target as HTMLElement;
      element.focus();
      element.blur();
    }, 1000);
  }

  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        padding: "0 16px",
        position: "fixed",
        height: "40px",
        alignItems: "center",
        top: `${height - 40}px`,
        left: 0,
        right: 0,
        zIndex: 999,
        borderTop: "1px solid #ECECEF",
      }}
    >
      <IconCamera style={{ cursor: "pointer" }} />
      <Text ml={1} textStyle={"body3"} color={"#9193A1"}>
        {value ?? 0}/{max ?? 0}
      </Text>
      <IconKeyboard
        style={{ marginLeft: "auto", cursor: "pointer" }}
        onClick={handleKeyboardClick}
      />
    </Flex>
  );
};

export default CameraBottomBar;
