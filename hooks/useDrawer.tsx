import { useDisclosure } from "@chakra-ui/react";
import BottomDrawer from "@/components/common/BottomDrawer";

type toastProps = {
  header: string;
  subtitle?: string;
  btnContent?: string;
  btnHandler?: () => void;
  children: JSX.Element;
};

export default function useDrawer({
  header,
  subtitle,
  btnContent,
  btnHandler,
  children,
}: toastProps): [() => void, JSX.Element] {
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

  const bottomDrawer = <BottomDrawer {...props} />;
  return [onOpen, bottomDrawer];
}
