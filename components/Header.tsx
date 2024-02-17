import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IoMdHome } from "react-icons/io";
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Text,
  useColorMode,
  Link,
  Icon,
  Box,
  MenuButton,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import fco from "./../public/fco.png";
import { useState } from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const color = useColorMode();
  return (
    <Box
      position="fixed"
      top="0px"
      zIndex="99"
      w="100%"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Flex align="center" justify="space-around" mt="4">
        <Flex align="center">
          <Link href="/" mb="-2" mr="2">
            <Image src={fco} width="20" height="30" alt="header logo" />
          </Link>
          <Text as="h2" fontWeight="semibold" fontSize="md">
            Sagar Dhandhalya
          </Text>
        </Flex>
        <div>
          <ButtonGroup
            display={["none", "none", "inline", "inline"]}
            variant="outline"
            mr="4"
            spacing="3"
            colorScheme="blue"
          >
            <Link href="/post">
              <Button>Blogs</Button>
            </Link>
            <Link href="/projects">
              <Button>Projects </Button>
            </Link>
          </ButtonGroup>

          <IconButton
            aria-label="open menu"
            mr="4"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={["inline", "inline", "none", "none"]}
            onClick={() => setIsOpen(!isOpen)}
          />

          {isOpen && (
            <Box
              position="absolute"
              top="60px"
              right="100px"
              display={["inline", "inline", "none", "none"]}
            >
              <Flex
                direction="column"
                shadow="lg"
                justify="strech"
                width="100px"
                borderRadius="md"
              >
                <Link
                  href="/blog"
                  my="2"
                  textAlign="center"
                  textDecor="none"
                  outline="none"
                >
                  Blogs
                </Link>
                <Divider />
                <Link
                  href="/projects"
                  my="2"
                  textAlign="center"
                  textDecor="none"
                  outline="none"
                >
                  Projects
                </Link>
              </Flex>
            </Box>
          )}

          <IconButton
            onClick={() => toggleColorMode()}
            aria-label="change color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </div>
      </Flex>
    </Box>
  );
};

export default Header;
