import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
  HStack
} from '@chakra-ui/react';

const TweetPostModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Tweet</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tweet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea placeholder="いまどうしてる？" />
          </ModalBody>

          <ModalFooter>
            <HStack spacing={3}>
              <Button colorScheme={"blue"}>Tweet</Button>
              <Button colorScheme={"gray"} mr={3} onClick={onClose}>
                Cancel
              </Button>
            </HStack>
          </ModalFooter>
        </ ModalContent>
      </Modal>
    </>
  );
}

export default TweetPostModal;
