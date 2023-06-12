import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Text,
} from "@chakra-ui/react";

export type IBottomDrawer = {
  header?: string;
  subtitle?: string;
  btnContent?: string;
  btnHandler?: (...args: any[]) => void;
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
};

export default function BottomDrawer({
  btnContent,
  btnHandler,
  header,
  subtitle,
  isOpen,
  onClose,
  children,
}: IBottomDrawer) {
  return (
    <>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius="2xl">
          <header>
            {header}
            <Text fontSize="sm">{subtitle && subtitle}</Text>
          </header>
          <DrawerBody>{children}</DrawerBody>
          {btnContent && (
            <Button colorScheme="gray" onClick={btnHandler} mb={2} mt={2}>
              {btnContent}
            </Button>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

type IDrawerButton = {
  btnContent: string;
  onOpen: () => void;
};

export function DrawerButton({ btnContent, onOpen }: IDrawerButton) {
  return (
    <Button colorScheme="gray" onClick={onOpen} mb={2} mt={2}>
      {btnContent}
    </Button>
  );
}
