import { Box, Text, VStack, Image, Textarea } from "@chakra-ui/react";
import DummyRecommend from "../Dummy/DummyRecommend";
import Recommend from "./Recommend";


const WikiList = () => {
  return (
    <div>
      <Box width={'sm'} height={'xs'} borderWidth={'1px'} borderRadius={'lg'}>
        <Text fontWeight={"bold"} fontSize={"20pt"} padding={"10pt"} colorScheme={"gray"}>
          # おすすめ記事

        </Text>

        <VStack>
          {DummyRecommend().map((recommend) => {
                return (
                  <Recommend {...recommend} />
                )
              })}
        </VStack>
      </Box>
    </div>
  );
}

export default WikiList
