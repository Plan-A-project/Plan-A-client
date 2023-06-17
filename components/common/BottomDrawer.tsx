import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Text,
  Heading,
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

type IDrawerButton = {
  btnContent: string;
  onOpen: () => void;
};

export default function BottomDrawer({
  btnContent, // drawer 내부 하단 버튼
  btnHandler, // drawer 내부 버튼 클릭 핸들러
  header, // drawer header
  subtitle, // drawer 하단 text
  isOpen,
  onClose,
  children, // drawer 내부 컨텐츠
}: IBottomDrawer) {
  return (
    <>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius="2xl" px={5}>
          {header && (
            <Heading fontSize={"xl"} mt={5}>
              {header}
            </Heading>
          )}
          {subtitle && <Text fontSize={"sm"}>{subtitle}</Text>}
          <DrawerBody p={0} my={4}>
            {children}
          </DrawerBody>
          {btnContent && (
            <Button colorScheme="primary" onClick={btnHandler} mb={4}>
              {btnContent}
            </Button>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export function DrawerButton({ btnContent, onOpen }: IDrawerButton) {
  return (
    <Button colorScheme="gray" onClick={onOpen} mb={2} mt={2}>
      {btnContent}
    </Button>
  );
}
