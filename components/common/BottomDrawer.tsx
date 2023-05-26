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
  header: string;
  subtitle: string | undefined;
  btnContent?: string;
  btnHandler?: () => void;
  isOpen: boolean;
  onClose: () => void;
  children: string | JSX.Element | JSX.Element[];
};

export default function BottomDrawer({
  header,
  subtitle,
  btnContent,
  btnHandler,
  isOpen,
  onClose,
  children,
}: IBottomDrawer) {
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent borderRadius="2xl">
        <DrawerHeader>
          {header}
          <Text fontSize="sm">{subtitle && subtitle}</Text>
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
        <Button bg="gray.300" onClick={btnHandler}>
          {btnContent}
        </Button>
      </DrawerContent>
    </Drawer>
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
