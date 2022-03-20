import type { NextPage } from "next";
import { Flex, Link, Button, Icon } from "@chakra-ui/react";
import Intro from "../components/Intro";
import CoolCanvas from "../components/CoolCanvas";
import TimeLine from "../components/TimeLine";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
  return (
    <Flex direction="column" align="center">
      <CoolCanvas />
      <Intro />
      <Link href="/projects" my="8">
        <Button>
          Projects <ArrowForwardIcon mx="1" />
        </Button>
      </Link>
      <TimeLine />
    </Flex>
  );
};

export default Home;
