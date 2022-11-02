import { useState } from "react";

import { AiOutlineComment } from "react-icons/ai";
import { HStack, Icon, Text, chakra } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";

const ReplyButton = (props) => {
  const [isReply, setIsReply] = useState(props.isReply)
  const controls = useAnimation()

  const toggleReply = async () => {
    await setIsReply(!isReply)
    controls.start({
      scale: [1, 1.3, 1.6, 1.3, 1]
    })
  }

  const MotionBox = motion(chakra.div)

  return (
    <HStack>
      <MotionBox
        cursor="pointer"
        onClick={toggleReply}
        animate={controls}
        transition={{ duration: 0.2 }}
      >
        <Icon 
          as={AiOutlineComment}
          mr='1'
          fontSize="22px"
          color={isReply ? 'blue.400' : ''}
        />
      </MotionBox>
      <Text>{props.count}</Text>
    </HStack>
  );
}

export default ReplyButton;
