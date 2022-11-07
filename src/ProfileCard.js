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
    <Box width={'sm'} height={'xs'} borderWidth={'0.2rem'} borderRadius={'lg'} borderColor='red.400'>
      <VStack>
        <Box>
          <VStack>
            <HStack>
              <Image borderRadius='full' boxSize='80px' margin={'5px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
              <VStack>
                <Text fontWeight={'extrabold'} fontSize={'1.8rem'} lineHeight={'none'}>{props.name}</Text>
                <HStack>
                  <Box fontWeight={'bold'} fontSize={'1.2rem'} lineHeight={'none'} justifyContent={'flex-end'}>{props.userName}</Box>
                  <Badge colorScheme={"green"} variant={"outline"}>M1</Badge>
                </HStack>
              </VStack>
            </HStack>
            <HStack>
              <Box>Follow: {props.follow}</Box>
              <Box>Follower: {props.follower}</Box>
              <Button>フォローする</Button>
            </HStack>
          </VStack>
        </Box>
        <Box padding={'3px'} borderWidth={1}>
          {props.greeting}
        </Box>
      </VStack>
    </Box>
  )
}

export default ProfileCard;
