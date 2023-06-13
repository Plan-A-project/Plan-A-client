import { useDisclosure } from "@chakra-ui/react";

import BottomDrawer from "@/components/common/BottomDrawer";

export type toastProps = {
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
}: toastProps): [() => void, () => JSX.Element] {
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

  const Toastbar = () => <BottomDrawer {...props} />;
  return [onOpen, Toastbar];
}
