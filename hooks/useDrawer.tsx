import { useDisclosure } from "@chakra-ui/react";

import { default as _BottomDrawer } from "@/components/common/BottomDrawer";

export type IbottomDrawerProps = {
  header: string;
  subtitle?: string;
  btnContent?: string;
  btnHandler?: (...args: any[]) => void;
  children: JSX.Element;
};

export default function useDrawer(
  props: IbottomDrawerProps,
): [() => void, () => JSX.Element] {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const _props = {
    isOpen,
    onClose,
  };

  const BottomDrawer = () => <_BottomDrawer {...props} {..._props} />;
  return [onOpen, BottomDrawer];
}
