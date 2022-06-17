import { Box, Heading, Text, Theme, useColorMode } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline, MdSchool } from "react-icons/md";
import { useTheme } from "@emotion/react";
interface IEvent {
  title: string;
  subtitle: string;
  date: string;
  descreption: string;
  type: "work" | "school";
}
const TimeLine = () => {
  const {colorMode} = useColorMode()
  const timeLineData: IEvent[] = [
    {
      title: "Web development engineer",
      subtitle: "Pickrr, Gurgaon",
      descreption: "Working as full time Frontend engineere with React stack.",
      date: "June 2022 - present",
      type: "work",
    },
    {
      title: "Software Engineer",
      subtitle: "Searce Inc, Bangolore",
      descreption: "Working as full time software engineer at Searce Inc.",
      date: "July 2021 - May 2021",
      type: "work",
    },
    {
      title: "Software Engineer intern",
      subtitle: "Searce Inc, Bangolore",
      descreption: "Working as software engineer intern at Searce Inc.",
      date: "Jan 2021-June 2021",
      type: "work",
    },
    {
      title: "B.tech ",
      subtitle: "DAIICT, Gandhinagar",
      descreption:
        "completed btech with ICT from Daiict gandhinagar. with 7.4 CGPA  ",
      date: "june 2017 - dec 2020",
      type: "school",
    },
    {
      title: "HSC",
      subtitle: "Saradar patel, Bhavnagar.",
      descreption:
        "10+2 with pysics math and chemistry, got 87 rank in Gujrat board. ",
      date: "2017",
      type: "school",
    },
  ];
  return (
    <Box w="100%">
      <Heading
        as="h3"
        size="md"
        fontWeight="bold"
        textDecoration="underline"
        textDecorationColor="blue.200"
        textDecorationThickness="5px"
        textUnderlineOffset="6px"
        my="12"
      >
        TimeLine
      </Heading>

      <Box>
        <VerticalTimeline lineColor={colorMode === "dark"?"white":"black"}>
          {timeLineData.map((data: IEvent) => {
            return (
              <VerticalTimelineElement
                key={data.title}
                contentStyle={
                  colorMode === "dark"
                    ? { background: "#2C313D", color: "#EEEFF0" }
                    : { background: "#EDF2F6", color: "#1A202C" }
                }
                contentArrowStyle={
                  colorMode === "dark"
                    ? { borderRight: "7px solid #2C313D" }
                    : { borderRight: "7px solid #EDF2F6" }
                }
                date={data.date}
                iconStyle={{ background: "#90CDF4", color: "black" }}
                icon={
                  data.type === "work" ? <MdOutlineWorkOutline /> : <MdSchool />
                }
              >
                <Text fontSize="lg">{data.title}</Text>
                <Text fontSize="md">{data.subtitle}</Text>
                <Text fontSize="sm">{data.descreption}</Text>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default TimeLine;
