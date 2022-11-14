import { Link } from "react-router-dom";
import WikiCard from "../Components/WikiCard"
import {
  Box,
  VStack,
  HStack,
  Container,
  useBreakpointValue
} from "@chakra-ui/react";

const Wiki = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return isDesktop ? 
  (
    <div>
      <VStack>
        <HStack>
      <Box>
        <WikiCard
          imageUrl='https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg'
          imageAlt='ゴリラ'
          title='タイトル'
          userName='Kashima Sho'
          tags='タグ'

        />
      </Box>

      <Box>
        <WikiCard
          imageUrl='https://www.sony.jp/ichigan/a-universe/assets/img/entry_detail/321/mv_01.jpg'
          imageAlt='きつね'
          title='タイトル'
          userName='Kashima Sho'
          tags='タグ'

        />
      </Box>

        </HStack>
      </VStack>
    </div>
  ) : (
    <div>
      <VStack>
        <WikiCard
          imageUrl='https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg'
          imageAlt='ゴリラ'
          title='タイトル'
          userName='Kashima Sho'
          tags='タグ'

        />
        <WikiCard
          imageUrl='https://www.sony.jp/ichigan/a-universe/assets/img/entry_detail/321/mv_01.jpg'
          imageAlt='きつね'
          title='タイトル'
          userName='Kashima Sho'
          tags='タグ'

        />
      </VStack>
    </div>
  );
}
export default Wiki;




