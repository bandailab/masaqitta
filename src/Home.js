import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

import {
  HStack,
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
        />
        <Tweet
          name="Shota Minegishi"
          userName="@smngs"
          date="31.Oct 2022, 12:00 PM"
          text="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
        />
      </HStack>
      <Link to="/about">ふがへ</Link>
    </div>
  );
}

export default Home;
