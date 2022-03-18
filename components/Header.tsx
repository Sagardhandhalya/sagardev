import { MoonIcon, SunIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex align="center" justify="space-around" mt="4">
        <Flex align="center">
          <Link href="/" mr="4">
            <Icon as={IoMdHome} boxSize="8" />
          </Link>
          <Text as="h2" fontWeight="semibold" fontSize="xl">
            Sagar Dhandhalya
          </Text>
        </Flex>
        <div>
          <ButtonGroup variant="outline" spacing="3" colorScheme="blue">
            <Button>Resume</Button>

            <Link href="/blog">
              <Button>Blog</Button>
            </Link>
            <Link href="/showcase">
              <Button>Projects </Button>
            </Link>
            <IconButton
              onClick={() => toggleColorMode()}
              aria-label="change color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
          </ButtonGroup>
        </div>
      </Flex>
    </div>
  );
};

export default Header;
