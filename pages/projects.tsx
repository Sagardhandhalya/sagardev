import { Box, Flex, Heading } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import familyGraph from "./../public/images/family_graph.png";
import mblog from "./../public/images/mblog.png"
import faceb from "./../public/images/faceb.png"
import canva from "./../public/images/canva.png"
import ecomf from "./../public/images/ecomf.png"
import dwitter from "./../public/images/dwitter.png"

export interface IProject {
  title: string;
  descreption: string;
  imageUrl: StaticImageData;
  url: string;
  tags: string[];
}

const Projects = () => {
  const myProjects: IProject[] = [
    {
      title: "Ecommerce Website",
      descreption:
        "Full stack application built with Golang,React and MYSQL. where you can store hierarchical data and visualize it.",
      imageUrl: familyGraph,
      url: "https://github.com/Sagardhandhalya/go-full-stack",
      tags: ["React Js", "Go", "MYSQL"],
    },
    {
      title: "Family graph visualization",
      descreption:
        "Full stack application built with Golang,React and MYSQL. where you can store hierarchical data and visualize it.",
      imageUrl: familyGraph,
      url: "https://github.com/Sagardhandhalya/go-full-stack",
      tags: ["React Js", "Go", "MYSQL"],
    },
    {
      title: "Ecommerce Application",
      descreption:
        "Ecommerce Application built with flutter and firebase, It has all the functionality like push notification,cart, product listing etc. ",
      imageUrl: ecomf,
      url: "https://github.com/Sagardhandhalya/ecom_app_flutter",
      tags: ["Flutter", "Firebase", "dart"],
    },
    {
      title: "Decentralized twitter",
      descreption:
        "Twitter like application, where user can post text content built on top of ethereum blockchain with react in frontend.other user will able to tip other user in ether.",
      imageUrl: dwitter,
      url: "https://github.com/Sagardhandhalya/Dwitter",
      tags: ["Truffle", "Ganache", "Metamask", "React js"],
    },
    {
      title: "Markdown Blog",
      descreption:
        "Platform where you can write blog with help of markdown syntax.built with Node JS.",
      imageUrl: mblog,
      url: "https://github.com/Sagardhandhalya/Blog-from-markdown",
      tags: ["Ejs", "Node Js"],
    },
    {
      title: "video chat application face blur",
      descreption:
        "Video chat applications where face will be blur with help of face detection.",
      imageUrl: faceb,
      url: "https://github.com/Sagardhandhalya/faceblur",
      tags: ["HTML", "CSS", "JavaScript", "Webrtc"],
    },
    {
      title: "Draw and Download",
      descreption:
        "• Online white board where you can write, draw and import images, it has build in video.build with HTML,CSS and JS.",
      imageUrl: canva,
      url: "https://sagardhandhalya.github.io/Canvas_Draw_and_Download/",
      tags: ["HTML", "CSS", "JavaScript", "Canvas Api"],
    },

  ];
  return (
    <>
      <Heading
        as="h1"
        size="md"
        textAlign="center"
        fontWeight="bold"
        textDecoration="underline"
        textDecorationColor="blue.200"
        textDecorationThickness="5px"
        textUnderlineOffset="6px"
        my="12"
      >
        Projects
      </Heading>
      <Flex
        direction={["column", "row"]}
        align={["", "space-around"]}
        justify={["", "center"]}
        wrap="wrap"
      >
        {myProjects.map((project: IProject) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Flex>
    </>

  );
};

export default Projects;
