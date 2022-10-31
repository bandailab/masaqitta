import {
  Box,
  Button,
  ButtonGroup,
  Spacer,
  Stack,
  HStack,
  VStack,
  Image,
  Text,
  useBreakpointValue,
  Badge,
} from '@chakra-ui/react'

const Tweet = (props) => {
  return (
    <>
      <Box maxWidth={"container.sm"} border={"1px"}>
        <VStack padding={1} align='start'>
          <HStack spacing={4} height='60px'>
          <Image
            borderRadius='full'
            height='60px'
            // boxSize='60px'
            marginLeft={"10px"}
            marginY={"10px"}
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
            <Box fontWeight={'extrabold'} fontSize={'15pt'}>{props.name}</Box>
            <Box fontWeight={'bold'} fontSize={'15pt'}>{props.userName}</Box>
            <Box fontWeight={'normal'} fontSize={'10pt'}>{props.date}</Box>
          </HStack>
          <Box padding={'15px'} paddingLeft={'100px'}>{props.text}</Box>
        </VStack>
      </Box>
    </>
  );
}
export default Tweet;
