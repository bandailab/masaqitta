import {
  Box,
  Button,
  ButtonGroup,
  Spacer,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react'

import { Link } from "../Atoms/Link"

import * as React from 'react'

const NavBar = (props) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box bg={'teal.100'} padding={5} rounded={15} margin={5}>
      <HStack paddingX={5}>
        <Box fontSize={'20pt'} fontWeight={'bold'}>
          <Link to="/">masaQiita</Link>
        </Box>
        <Spacer />
        <ButtonGroup variant={'link'} spacing={'5'}>
          {
            props.contents.map((item) => (
              <Link to={item.link} key={item.key}>{item.name}</Link>
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

export default NavBar;
