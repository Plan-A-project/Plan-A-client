import { ReactElement, useState } from "react";

import { Divider, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

import { useClickOutside } from "@/hooks/useClickOutside";

type DropdownProps = {
  menus: string[];
  ref: React.RefObject<HTMLElement>;
  hAlign?: "left" | "right";
  vAlign?: "top" | "bottom";
  xGap?: number;
  yGap?: number;
  onMenuClick?: (menu: string) => void;
};

export function useDropdown({
  menus,
  ref,
  hAlign,
  vAlign,
  xGap,
  yGap,
  onMenuClick,
}: DropdownProps): [ReactElement, () => void] {
  const menuRef = useClickOutside<HTMLDivElement>({
    onClickOutside: () => setIsOpen(false),
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggle(flag?: boolean) {
    setIsOpen(prevIsOpen => {
      if (flag !== undefined) return flag;

      return !prevIsOpen;
    });
  }

  const isRight = hAlign === "right";
  const isBottom = vAlign === "bottom";

  const { offsetTop, offsetHeight, offsetLeft, offsetWidth } = ref.current || {
    offsetTop: 0,
    offsetHeight: 0,
    offsetLeft: 0,
    offsetWidth: 0,
  };

  const menuHeight = menuRef?.current?.offsetHeight || 0;

  const vGap = yGap || 0;
  const hGap = xGap || 0;

  const top = offsetTop + (isBottom ? -menuHeight - vGap : offsetHeight + vGap);

  const menuWidth = menuRef?.current?.offsetWidth || 0;

  const left = offsetLeft + (isRight ? offsetWidth - menuWidth - hGap : hGap);

  function handleMenuClick(menu: string) {
    return () => {
      onMenuClick?.(menu);
    };
  }

  const component = (
    <VStack
      ref={menuRef}
      sx={{
        borderRadius: "12px",
        position: "absolute",
        transition: "transform 0.2s ease",
        transformOrigin: "top center",
        transform: isOpen ? "scale(1)" : "scale(0)",
        background: "white",
        padding: 0,
        left: `${left}px`,
        top: `${top}px`,
        boxShadow: "0px 0px 20px rgba(48, 49, 54, 0.24)",
      }}
      divider={<Divider />}
      spacing={0}
    >
      {menus.map(menu => (
        <Button
          sx={{
            padding: "12px 16px",
            height: "auto",
          }}
          variant={"unstyled"}
          key={menu}
          onClick={handleMenuClick(menu)}
        >
          {menu}
        </Button>
      ))}
    </VStack>
  );

  return [component, toggle];
}
