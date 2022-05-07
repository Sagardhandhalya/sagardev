import { useColorMode } from "@chakra-ui/react";

export default function useBoxShadow(): string[] {
  const darkShadow = "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px";
  const darkHoverShadow = "rgba(0, 0, 0, 0.4) 0px 5px 10px";
  const lightShadow = "rgba(153, 213, 234, 0.4) 1px 2px 0px 0px";
  const lightHoverShadow = "rgba(153, 213, 234, 0.4) 1px 1px 10px";
  const { colorMode } = useColorMode();
  if (colorMode === "dark") {
    console.log("dark");
    return ["", lightHoverShadow];
  } else {
    console.log("lighr");
    return [darkShadow, darkHoverShadow];
  }
}
