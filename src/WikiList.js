import { Box, Text, VStack, Image } from "@chakra-ui/react";

const WikiList = () => {
  return (
    <div>
      <Box width={'sm'} height={'xs'} borderWidth={'1px'} borderRadius={'lg'}>
        <Text fontWeight={"bold"} fontSize={"20pt"} padding={"10pt"} colorScheme={"gray"}>
          # おすすめ記事
        </Text>

        <VStack>
          <Box borderWidth={"1px"} borderRadius={'lg'} width={'22em'} >
            <Image></Image>
          </Box>
        </VStack>
      </Box>
    </div>
  );
}

export default WikiList
