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

import axios from '../api/axios';
import { useContext, useState } from 'react';
import { AuthContext } from "../api/Auth";

const LoginButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { setAuth } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  console.log(token)

  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const createAuth = async () => {
    const response = await axios.post("/token/", {
      withCredentials: false,
      username: userName,
      password: password
    });

    localStorage.setItem('token', response.data.access)
    setAuth({ accessToken: response.data.access, refreshToken: response.data.refresh })

    return response.data.access
  }

  const handleClick = () => {
    createAuth()
    onClose();
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme={"teal"}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input type='text' value={userName} onChange={handleChangeUserName}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type='password' value={password} onChange={handleChangePassword}/>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack spacing={3}>
              <Button colorScheme={"blue"} onClick={handleClick}>Login</Button>
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

export default LoginButton;
