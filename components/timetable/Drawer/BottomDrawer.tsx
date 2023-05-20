import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";

type IBottomDrawer = {
  btnContent: string;
  drawerHeader: string;
  drawerText: string | undefined;
  children: string | JSX.Element | JSX.Element[];
};

export default function BottomDrawer({
  btnContent,
  drawerHeader,
  drawerText,
  children,
}: IBottomDrawer) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="gray" onClick={onOpen}>
        {btnContent}
      </Button>
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
