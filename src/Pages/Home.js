import ProfileCard from "../Components/ProfileCard";
import WikiList from "../Components/WikiList";

import {
  HStack, 
  VStack,
  Stack,
  Container,
  Spinner,
  Center
} from "@chakra-ui/react";

import Tweet from "../Components/Tweet";
import TweetPostModal from "../Components/TweetPostModal";

// import axios from "axios";
import useAuthAxios from "../api/useAuthAxios"
import React from "react";

// FIXME: これはあとで App.js にまとめる．

const Home = () => {
  // FIXME: 本当は 2 つ以上 useState を宣言したくない．
  const [tweets, setTweets] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const authAxios = useAuthAxios();

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await authAxios("/user/");
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getTweets = async () => {
      try {
        const response = await authAxios("/tweet/");
        setTweets(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
    getTweets();
  }, []);

  if (tweets.data === undefined) {
    return (
      // FIXME: イケてない
      <Container maxWidth={{base: 'full', lg: '1920px'}}>
        <Center>
          <Spinner />
        </Center>
      </Container>
    )
  }

  return ( 
    <div>
      <Container
        /* bg={{base: 'red.200', sm: 'yellow.200', md: 'green.200', lg: 'blue.200'}} */
        maxWidth={{base: 'full', lg: '1920px'}}
        centerContent
      >
        <HStack spacing={"20px"} alignItems={'start'}>
          <VStack spacing={"20px"} paddingRight={10}>
            <ProfileCard {...user.data}/>
            <WikiList />
            <TweetPostModal />
          </VStack>
          <Stack>
            {
              tweets.data.map((tweet) => {
                // Warning: each child in a list should have a unique "key" prop.
                return (<Tweet {...tweet} />)
              })
            }
          </Stack>
        </HStack>
      </Container>
    </div>
  );
}

export default Home;
