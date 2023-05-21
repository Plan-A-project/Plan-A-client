import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  Text,
} from "@chakra-ui/react";

type IBottomDrawer = {
  btnContent: string;
  drawerHeader: string;
  drawerText: string | undefined;
  isOpen: boolean;
  onClose: () => void;
  children: string | JSX.Element | JSX.Element[];
};

export default function BottomDrawer({
  btnContent,
  drawerHeader,
  drawerText,
  isOpen,
  onClose,
  children,
}: IBottomDrawer) {
  return (
    <>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius="2xl">
          <DrawerHeader>
            {drawerHeader}
            <Text fontSize="sm">{drawerText && drawerText}</Text>
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
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
