import {
  Box,
  Button,
  ButtonGroup,
  Spacer,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'

const NavBarContents = ['hoge', 'huga', 'piyo', 'foo', 'bar']

const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box bg={'teal.100'} padding={5} rounded={15} margin={5}>
      <HStack paddingX={5}>
        <Box fontSize={'20pt'} fontWeight={'bold'}>masaQiita</Box>
        <Spacer />
        <ButtonGroup variant={'link'} spacing={'5'}>
          {
            NavBarContents.map((item) => (
              <Button key={item}>{item}</Button>
            ))
          }
        </ButtonGroup>

        {/* TODO: ここもっといい書き方ある */}
        <HStack paddingLeft={5}>
          <Button bgColor={'teal.400'} color='white'>Login</Button>
        </HStack>
      </HStack>
    </Box>
  )
}

export default NavBar
