import { Box, Center, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
type ModalProps = {
  title: string;
  content: any;
};
const useCustomModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const ModalComponent: React.FC<ModalProps> = ({ title, content }) => (
    <Box mx={4}>
      <Modal size={"xs"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            {/* {secondaryAction && (
            <Button variant="ghost">{secondaryAction}</Button>
          )} */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );

  return { ModalComponent, onOpen, onClose };
};

export default useCustomModal;
