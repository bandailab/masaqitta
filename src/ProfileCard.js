import {
  Box,
  Button,
  ButtonGroup,
  Spacer,
  HStack,
  VStack,
  Image,
  Text,
  useBreakpointValue,
  Badge,
} from '@chakra-ui/react'
import * as React from 'react'

const ProfileCard = (props) => {
  return (
    <Box width={'sm'} height={'xs'} borderWidth={'1px'} borderRadius={'lg'}>
      <HStack>
        <Image
          borderRadius='full'
          boxSize='100px'
          margin={"15px"}
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
        <VStack align='start' spacing={1}>
          <Text fontWeight={'extrabold'} fontSize={'20pt'}>{props.name}</Text>
          <HStack spacing={3}>
            <Text fontWeight={'bold'} fontSize={'15pt'}>{props.userName}</Text>
            <Badge colorScheme={"green"} variant={"outline"}>M1</Badge>
          </HStack>
        </VStack>
      </HStack>
      <Box padding={'15px'}>{props.greeting}</Box>
    </Box>
  )
}

export default ProfileCard;
