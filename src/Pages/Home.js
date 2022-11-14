import { Link } from "react-router-dom";
import ProfileCard from "../Components/ProfileCard";
import WikiList from "../Components/WikiList";

import {
  HStack, 
  VStack,
  Stack,
  Container,
  Button,
  useBreakpointValue
} from "@chakra-ui/react";

import Tweet from "../Components/Tweet";
import TweetPostModal from "../Components/TweetPostModal";

import DummyTweets from "../Dummy/DummyTweets.js"

const Home = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return isDesktop ? (
    <div>
      <Container
        /* bg={{base: 'red.200', sm: 'yellow.200', md: 'green.200', lg: 'blue.200'}} */
        maxWidth={{base: 'full', lg: '1920px'}}
        centerContent
      >
        <HStack spacing={"20px"} alignItems={'start'}>
          <VStack spacing={"20px"} paddingRight={10}>
            <ProfileCard 
              name="Shota Minegishi"
              userName="@smngs"
              greeting="よろしくおねがいします．"
              imageURL="https://bit.ly/dan-abramov"
              follow="12"
              follower="30"
              />
            <WikiList />
            <TweetPostModal />
          </VStack>
          <Stack paddingBottom={10}>
            {DummyTweets().map((tweet) => {
              return (
                <Tweet {...tweet} />
              )
            })}
          </Stack>
        </HStack>
      </Container>
    </div>
  ) : (
    <div>
      <Container
        /* bg={{base: 'red.200', sm: 'yellow.200', md: 'green.200', lg: 'blue.200'}} */
        maxWidth={{base: 'full', lg: '1920px'}}
        centerContent
      >
          <VStack paddingBottom={10}>
            <ProfileCard 
              name="Shota Minegishi"
              userName="@smngs"
              greeting="よろしくおねがいします．"
              imageURL="https://bit.ly/dan-abramov"
              follow="12"
              follower="30"
              />
            <TweetPostModal />
            {DummyTweets().map((tweet) => {
              return (
                <Tweet {...tweet} />
              )
            })}
          </VStack>
      </Container>
    </div>
  );
}

export default Home;
