import WikiCard from "../Components/WikiCard"
import {
  Box,
  VStack,
  HStack,
  Container
} from "@chakra-ui/react";

const dummyWiki = [
  {
    imageUrl: 'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg',
    imageAlt: 'ゴリラ',
    title: 'ゴリラの飼育方法',
    userName: 'Kashima Sho',
    summary: 'ゴリラって可愛いですよね．',
    tags: [
      {
        tagName: "tag1",
        tagColor: "green"
      },
      {
        tagName: "tag2",
        tagColor: "blue"
      }
    ]
  },
  {
    imageUrl: 'https://www.sony.jp/ichigan/a-universe/assets/img/entry_detail/321/mv_01.jpg',
    imageAlt: 'キツネ',
    title: 'キツネとエキノコックス',
    userName: 'Kashima Sho',
    summary: 'エキノコックスって怖いですね．',
    tags: [
      {
        tagName: "tag1",
        tagColor: "green"
      },
      {
        tagName: "tag2",
        tagColor: "blue"
      }
    ]
  },
]

const Wiki = () => {
  return (
    <Container
      /* bg={{base: 'red.200', sm: 'yellow.200', md: 'green.200', lg: 'blue.200'}} */
      maxWidth={{base: 'full', lg: '1920px'}}
      centerContent
    >
      <VStack>
        <HStack>
          {
            dummyWiki.map((wiki) => {
              return (
                <Box>
                  <WikiCard {...wiki} />
                </Box>
              )
            })
          }
        </HStack>
      </VStack>
    </Container>
  );
}
export default Wiki;




