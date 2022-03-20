import { Box, Flex, Heading } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import chess from "./../public/images/chess.jpeg";

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
      title: "First Project",
      descreption:
        "lorem vent - compiled client and server successfully in 310 ms (640 modules) wait  - compiling...event - compiled successfully in 77 ms (604 modules)",
      imageUrl: chess,
      url: "https://media.istockphoto.com/photos/chess-pieces-picture-id956930910?k=20&m=956930910&s=612x612&w=0&h=wvXlIeZkKtREsAzTPFfo5NfrAjtkC45DACuXjmphjIk=",
      tags: ["React Js", "Node Js"],
    },
    {
      title: "First Project123",
      descreption:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ",
      imageUrl: chess,
      url: "https://media.istockphoto.com/photos/chess-pieces-picture-id956930910?k=20&m=956930910&s=612x612&w=0&h=wvXlIeZkKtREsAzTPFfo5NfrAjtkC45DACuXjmphjIk=",
      tags: ["React Js", "Node Js"],
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
