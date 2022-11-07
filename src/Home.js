import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Wiki from "./Pages/Wiki"

import {
  HStack,
  Box
} from "@chakra-ui/react";

import Tweet from "./Tweet";

const Home = () => {
  return (
    <div>
      <HStack>
        <ProfileCard 
          name="Shota Minegishi"
          userName="@smngs"
          greeting="よろしくおねがいします．"
          follow="12"
          follower="30"
        />
        <Tweet
          name="Shota Minegishi"
          userName="@smngs"
          date="31.Oct 2022, 12:00 PM"
          text="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
        />
      </HStack>
      <Box>
        <Wiki
          imageUrl='https://bit.ly/2Z4KKcF'
          imageAlt='Rear view of modern home with pool'
          beds="3"
          baths="2"
          title='タイトル'
          formattedPrice='$1,900.00'
          reviewCount="34"
          rating="4"
        />
      </Box>
      <Link to="/about">ふがへ</Link>
    </div>
  );
}

export default Home;
