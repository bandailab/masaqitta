import {
  Box,
  Stack,
  HStack,
  Text,
  Heading,
  Avatar
} from '@chakra-ui/react'

import LikeButton from "../Atoms/LikeButton";
import RetweetButton from "../Atoms/RetweetButton";
import ReplyButton from "../Atoms/ReplyButton";

const Tweet = (props) => {
  return (
    <>
      <Box maxWidth={"container.sm"} border={"1px"} borderRadius={'xl'}>
        <HStack spacing={1} margin={2} height='60px' >
          <Avatar src={props.imageURL} margin={'10px'} />
          <Stack>
            <Stack spacing={1} alignItems={'start'}>
              <Heading fontWeight={'bold'} fontSize={'11pt'}>{props.name}</Heading>
              <Text fontWeight={'italic'} color={'blackAlpha.600'} fontSize={'10pt'}>{props.userName} / {props.date}</Text>
            </Stack>
          </Stack>
        </HStack>

        <Box paddingLeft={20} paddingRight={10}>
          <Box>{props.text}</Box>
          <HStack marginY={3} spacing={24} justifyContent={'start'}>
            <LikeButton {...props.like}/>
            <RetweetButton {...props.retweet}/>
            <ReplyButton {...props.reply}/>
          </HStack>
        </Box>
      </Box>
    </>
  );
}
export default Tweet;
