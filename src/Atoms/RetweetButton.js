import { useState } from "react";

import { AiOutlineRetweet } from "react-icons/ai";
import { HStack, Icon, Text, chakra } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";

const RetweetButton = (props) => {
  const [isRetweet, setIsRetweet] = useState(props.isRetweet)
  const controls = useAnimation()

  const toggleRetweet = async () => {
    await setIsRetweet(!isRetweet)
    controls.start({
      scale: [1, 1.3, 1.6, 1.3, 1]
    })
  }

  const MotionBox = motion(chakra.div)

  return (
    <HStack>
      <MotionBox
        cursor="pointer"
        onClick={toggleRetweet}
        animate={controls}
        transition={{ duration: 0.2 }}
      >
        <Icon 
          as={AiOutlineRetweet}
          mr='1'
          fontSize="22px"
          color={isRetweet ? 'green.400' : ''}
        />
      </MotionBox>
      <Text>{props.count}</Text>
    </HStack>
  );
}

export default RetweetButton;
