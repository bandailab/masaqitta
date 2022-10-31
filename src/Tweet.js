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
        <HStack align='start'>
          <Image
            borderRadius='full'
            height='60px'
            // boxSize='60px'
            marginX={"10px"}
            marginY={"10px"}
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
          <VStack spacing={3}>
          <HStack justify={"start"} padding={0} margin={0} spacing={4} height='60px'>
            <Box fontWeight={'extrabold'} fontSize={'15pt'}>{props.name}</Box>
            <Box fontWeight={'bold'} fontSize={'15pt'}>{props.userName}</Box>
            <Box fontWeight={'normal'} fontSize={'10pt'}>{props.date}</Box>
          </HStack>
          <Box padding={'15px'}>{props.text}</Box>
        </VStack>
      </HStack>
      </Box>
    </>
  );
}
export default Tweet;
