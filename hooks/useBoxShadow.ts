import { useColorMode } from "@chakra-ui/react";

export default function useBoxShadow(): string[] {
  const darkShadow = "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px";
  const darkHoverShadow = "rgba(0, 0, 0, 0.4) 0px 5px 10px";
  const lightShadow = "rgba(255, 255, 255, 0.15) 0px 1px 2px 0px";
  const lightHoverShadow = "rgba(255, 255, 255, 0.4) 0px 5px 10px";
  const { colorMode } = useColorMode();
  if (colorMode === "dark") {
    return ["", lightHoverShadow];
  } else {
    return [darkShadow, darkHoverShadow];
  }
}
