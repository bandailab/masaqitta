import {
  Box,
  Stack,
  HStack,
  Text,
  Heading,
  Avatar
} from '@chakra-ui/react'

const Tweet = (props) => {
  return (
    <>
      <Box maxWidth={"container.sm"} border={"1px"} borderRadius={'xl'}>
        <HStack spacing={1} margin={2} height='60px' >
          <Avatar src={props.imageURL} margin={'10px'} />
          <Stack spacing={1} alignItems={'start'}>
            <Heading fontWeight={'bold'} fontSize={'11pt'}>{props.name}</Heading>
            <Text fontWeight={'italic'} color={'blackAlpha.600'} fontSize={'10pt'}>{props.userName} / {props.date}</Text>
          </Stack>
        </HStack>
        <Box paddingLeft={20} paddingRight={10} paddingBottom={5}>{props.text}</Box>
      </Box>
    </>
  );
}
export default Tweet;
