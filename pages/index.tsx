import type { NextPage } from "next";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Text, Box, UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import SocialLinks from "../components/Footer";
import Intro from "../components/Intro";
import CoolCanvas from "../components/CoolCanvas";
import TimeLine from "../components/TimeLine";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Flex direction="column" mx={[0, "20%"]} align="center">
      <Intro />
      <Skills />
      <TimeLine />
      <Footer />
    </Flex>
  );
};

export default Home;
