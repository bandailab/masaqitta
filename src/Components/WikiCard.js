// title, imageUrl, username, imageAlt
import {
  Box,
  Button,
  ButtonGroup,
  Spacer,
  HStack,
  VStack,
  Image,
  Text,
  useBreakpointValue,
  Badge
} from '@chakra-ui/react'

import * as React from 'react'

const WikiCard = (props) => {
  return (
    <Box maxW='xs' maxH='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={props.imageUrl} alt={props.imageAlt} boxSizing/>

      <Box p='10'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {/* タグを入れたい */}
            {props.tags}
          </Badge>
          <Box
            color='blue.400'
            fontWeight='bold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml=''
          >
            {props.userName}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {props.title}
        </Box>

        <Box>
          {props.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

// tags map関数
// 画像の大きさ調整

export default WikiCard;
