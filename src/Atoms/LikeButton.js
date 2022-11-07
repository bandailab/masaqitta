import { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HStack, Icon, Text, chakra } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";

const LikeButton = (props) => {
  const [isLike, setIsLike] = useState(props.isLike)
  const controls = useAnimation()

  const toggleLike = async () => {
    await setIsLike(!isLike)
    controls.start({
      scale: [1, 1.3, 1.6, 1.3, 1]
    })
  }

  const MotionBox = motion(chakra.div)

  return (
    <HStack>
      <MotionBox
        cursor="pointer"
        onClick={toggleLike}
        animate={controls}
        transition={{ duration: 0.2 }}
      >
        <Icon 
          as={isLike ? AiFillHeart : AiOutlineHeart}
          mr='1'
          fontSize="22px"
          color={isLike ? 'red.400' : ''}
        />
      </MotionBox>
      <Text>{props.count}</Text>
    </HStack>
  );
}

export default LikeButton;
