import { Link } from "react-router-dom";
import ProfileCard from "../Components/ProfileCard";
import WikiList from "../Components/WikiList";

import {
  HStack, 
  VStack,
  Stack,
  Container,
  Button
} from "@chakra-ui/react";

import Tweet from "../Components/Tweet";
import TweetPostModal from "../Components/TweetPostModal";

import DummyTweets from "../Dummy/DummyTweets.js"

import axios from "axios";
import React from "react";

// FIXME: これはあとで App.js にまとめる．
const baseURL = "http://localhost:8000"

const Home = () => {
  const [summary, setSummary] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL + "/tweets").then((response) => {
      setSummary(response);
    });
  }, []);

  return ( <div>
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
          <Stack>
            {summary.data.map((tweet) => {
              return (
                // Warning: each child in a list should have a unique "key" prop.
                <Tweet {...tweet} />
              )
            })}
          </Stack>
        </HStack>
      </Container>
    </div>
  );
}

export default Home;
