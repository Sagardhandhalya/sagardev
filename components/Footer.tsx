import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Link,
  Icon,
  ComponentWithAs,
  IconProps,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";
import styled from "@emotion/styled";

interface ISocial {
  text: string;
  icon: IconType | ComponentWithAs<"svg", IconProps>;
  link: string;
}
const Footer = () => {
  const socials: ISocial[] = [
    {
      text: "dhandhalyasagar0@gmail.com",
      icon: EmailIcon,
      link: "mailto:dhandhalyasagar0@gmail.com",
    },

    {
      text: "SagarDhandhalya",
      icon: IoLogoGithub,
      link: "https://github.com/Sagardhandhalya",
    },

    {
      text: "sagar-dhandhalya",
      icon: IoLogoLinkedin,
      link: "https://www.linkedin.com/in/sagar-dhandhalya/",
    },
    {
      text: "sagar_se_71",
      icon: IoLogoInstagram,
      link: "https://www.instagram.com/sagar_se_71/",
    },

    {
      text: "DhandhalyaSagar",
      icon: IoLogoTwitter,
      link: "https://twitter.com/DhandhalyaSagar",
    },
  ];

  return (
    <Box w="100%" py="12">
      <Flex
        align={["center", "space-around"]}
        justify={["space-around", "center"]}
        mt="4"
        direction={["row", "column"]}
      >
        <Flex color="teal.500" fontWeight="normal" wrap="wrap">
          {socials.map((social: ISocial) => {
            return (
              <Link href={social.link} key={social.link}>
              <Flex
                key={social.link}
                align="center"
                justify="space-around"
                mx={["2","6"]}
              >
                <Icon as={social.icon} mx={["1","2"]} h={["7"]} w={["7"]} />
                  <Text display={["none", "inline",]}  > {social.text} </Text> 
              </Flex>
              </Link>
            );
          })}
        </Flex>
      </Flex>
      <Text mt="4" textAlign="center" fontWeight="bold">Copyright @2021 by Sagar.</Text>
    </Box>
  );
};

export default Footer;
