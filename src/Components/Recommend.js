import {
  Box,
  Stack,
  HStack,
  Text,
  Flex,
  Image
} from '@chakra-ui/react'

const Recommend = (props) => {
  return(
    <Box display='flex' width={"300px"} border={"1px"} borderRadius={'xl'}>
        <HStack display='flex' spacing={1} margin={2} height='60px' >
          <Image borderRadius='5px' boxSize='40px' objectFit='cover' src={props.imageURL}></Image>
          <Stack>
            <Stack spacing={1} alignItems={'start'}>
              <Text fontWeight={'italic'} color={'blackAlpha.900'} fontSize={'14pt'}>{props.text}</Text>
            </Stack>
          </Stack>
        </HStack>
    </Box>
  );
}

export default Recommend;