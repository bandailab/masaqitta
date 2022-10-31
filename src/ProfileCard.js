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
    <Box width={'sm'} height={'xs'} borderWidth={'3px'} borderRadius={'lg'}>
      <HStack borderWidth={'2px'}>
        <Image
          borderRadius='full'
          boxSize='80px'
          margin={"5px"}
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
        <VStack align='start' spacing={1} borderWidth={'1px'}>
          <Text fontWeight={'extrabold'} fontSize={'20pt'}>{props.name}</Text>
          <HStack spacing={3} borderWidth={'1px'}>
            <Text fontWeight={'bold'} fontSize={'15pt'}>{props.userName}</Text>
            <Badge colorScheme={"green"} variant={"outline"}>M1</Badge>
          </HStack>
          <HStack borderWidth={'1px'}>
            <Box>Follow: {props.follow}</Box>
            <Box>Follower: {props.follower}</Box>
            <Button>フォローする</Button>
          </HStack>
        </VStack>
      </HStack>
      
      <Box padding={'3px'} borderWidth={'1px'}>
        {props.greeting}
      </Box>
    </Box>
  )
}

export default ProfileCard;
