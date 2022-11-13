// title, imageUrl, username, imageAlt
import {
  Box,
  Button,
  ButtonGroup,
  Spacer,
  HStack,
  Stack,
  Image,
  Text,
  useBreakpointValue,
  Badge 
} 
from '@chakra-ui/react'

import * as React from 'react'

const WikiCard = (props) => {
  return (
    <Box maxWidth='300px' maxHeight='450px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={props.imageUrl} alt={props.imageAlt} boxSize="300px" fallbackSrc="https://via.placeholder.com/300px" boxSizing />

      <Stack padding='5' spacing={1}>
        <HStack display='flex' alignItems='baseline' spacing={2} marginBottom={1}>
          {
            props.tags.map((tag) => {
              return (
                <Badge borderRadius='full' px='2' colorScheme={tag.tagColor}>
                  {tag.tagName}
                </Badge>
              )
            })
          }
        </HStack>

        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
          {props.title}
        </Box>

        <Box color='blue.400' fontWeight='bold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml=''>
          {props.userName}
        </Box>

        <Box as='span' color='gray.600' fontSize='sm'>
          {props.summary}
        </Box>
      </Stack>
    </Box>
  )
}

// tags map関数
// 画像の大きさ調整

export default WikiCard;
