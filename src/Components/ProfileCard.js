import {
  Box,
  Button,
  HStack,
  VStack,
  Avatar,
  Text,
  Badge,
} from '@chakra-ui/react'
import * as React from 'react'

const ProfileCard = (props) => {
  const [ isFollow, setIsFollow ] = React.useState(true)

  return (
    <Box width={'sm'} maxHeight={'xs'} borderWidth={'2px'} borderRadius={'lg'}>
      <HStack>
        <Avatar
          borderRadius='full'
          boxSize='80px'
          margin={5}
          src={props.imageURL}
          alt='{props.userName}'
          />
        <VStack align='start' spacing={1}>
          <Text fontWeight={'extrabold'} fontSize={'20pt'}>{props.name}</Text>
          <HStack alignItems={'baseline'}>
            <Text fontWeight={'bold'} fontSize={'15pt'}>{props.userName}</Text>
            <Badge colorScheme={"green"} variant={"outline"}>M1</Badge>
          </HStack>
        </VStack>
      </HStack>

      <HStack justify={'center'} spacing={10}>
        <VStack align='start' spacing={1}>
          <Text>Follow:</Text>
          <Text fontWeight={'bold'}>{props.follow}</Text>
        </VStack>
        <VStack align='start' spacing={1}>
          <Text>Follower:</Text>
          <Text fontWeight={'bold'}>{props.follower}</Text>
        </VStack>
        <Button colorScheme={isFollow ? "gray" : "blue"} onClick={() => {setIsFollow(!isFollow)}}>{isFollow ? "フォローする" : "フォロー済み"}</Button>
      </HStack>
      <Box padding={5}>
        {props.greeting}
      </Box>
    </Box>
  )
}

export default ProfileCard;
