import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import me from "./../public/me.jpeg";
const Intro = () => {
  return (
    <Box w={["90%", "70%"]}>
      <Flex direction={['column', 'row']} justify={["center", "space-between"]} align={["center","center"]} w="100%">
        <div>
          <Heading as="h1" size="2xl">
            Sagar Dhandhalya
          </Heading>
          <Heading as="h3" size="md" fontWeight="thin">
            Software Engineer, Farmer, Cinephile
          </Heading>
        </div>
        <Box as="div" borderRadius="full" width="150px" mt={['5']}  overflow="hidden">
          <Image src={me} alt="Sagar Dhandhalya" />
        </Box>
      </Flex>
      <Flex  justify="center" align="center">
        <Box>
          <Heading
            as="h3"
            size="md"
            fontWeight="bold"
            textDecoration="underline"
            textDecorationColor="blue.200"
            textDecorationThickness="5px"
            textUnderlineOffset="6px"
            my="6"
          >
            About
          </Heading>
          <Text as="p">
            {`  I'm a Software Engineer based in Gujrat, India. I have a passion for
          building performant, scalable and beautiful user interfaces. I have
          proficiency in technologies like React.js, Angular.js, Node.js,
          Flutter and Golang. I have B.Tech degree in Information Communication
          Technology from DAIICT gandhinagar, and I am currently working as a
          full-time Software Engineer.`}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Intro;
