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
import {StarIcon} from '@chakra-ui/icons'
import * as React from 'react'

const Wiki = (props) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={props.imageUrl} alt={props.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {props.beds} beds &bull; {props.baths} baths
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
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < props.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {props.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Wiki;