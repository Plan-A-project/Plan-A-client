import { useDisclosure } from "@chakra-ui/react";

import { default as _BottomDrawer } from "@/components/common/BottomDrawer";

export type IbottomDrawerProps = {
  header: string;
  subtitle?: string;
  btnContent?: string;
  btnHandler?: (...args: any[]) => void;
  children: JSX.Element;
};

export default function useDrawer({
  header,
  subtitle,
  btnContent,
  btnHandler,
  children,
}: IbottomDrawerProps): [() => void, () => JSX.Element] {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const props = {
    header,
    subtitle,
    btnContent,
    btnHandler,
    isOpen,
    onClose,
    children,
  };

  const BottomDrawer = () => <_BottomDrawer {...props} />;
  return [onOpen, BottomDrawer];
}
