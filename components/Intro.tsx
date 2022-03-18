import { Flex, Heading, Box } from "@chakra-ui/react";
import Image from "next/image";
import me from "./../public/me.jpeg";
const Intro = () => {
  return (
    <Flex justify="space-between" align="center" w="100%">
      <div>
        <Heading as="h1" size="2xl">
          Sagar Dhandhalya
        </Heading>
        <Heading as="h3" size="md" fontWeight="thin">
          Software Engineer, Farmer, Cinephile
        </Heading>
      </div>
      <Box as="div" borderRadius="full" width="150px" overflow="hidden">
        <Image src={me} alt="Sagar Dhandhalya" />
      </Box>
    </Flex>
  );
};

export default Intro;
