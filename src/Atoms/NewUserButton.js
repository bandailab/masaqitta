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
  HStack,
  VStack,
  Input,
  FormControl,
  FormLabel
} from '@chakra-ui/react';

import axios from 'axios';

import { useState } from 'react';

const NewUserButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [userName, setUserName] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')

  const [response, setResponse] = useState([])

  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleChangeFullName = (e) => {
    setFullName(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleClick = () => {
    axios.post('http://localhost:8000/api/user/', {
      username: userName,
      fullname: fullName,
      password: password
    })
    .then(r => {
      setResponse(r)
    })
    .catch(error => {
      console.log(error)
    })
    onClose();
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme={"blue"}>New User</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input type='text' value={userName} onChange={handleChangeUserName}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Fullname</FormLabel>
                <Input type='text' value={fullName} onChange={handleChangeFullName}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type='password' value={password} onChange={handleChangePassword}/>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack spacing={3}>
              <Button colorScheme={"blue"} onClick={handleClick}>New User</Button>
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

export default NewUserButton;
