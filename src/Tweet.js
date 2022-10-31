import {
  Box,
} from "@chakra-ui/react";

const Tweet = (props) => {
  return (
    <>
      <Box maxWidth={"container.sm"} border={"1px"}>
        <Box>
          {props.name}
        </Box>
        <Box>
          {props.username}
        </Box>
        <Box>
          {props.text}
        </Box>
        <Box>
          {props.date}
        </Box>
      </Box>
    </>
  );
}
export default Tweet;
