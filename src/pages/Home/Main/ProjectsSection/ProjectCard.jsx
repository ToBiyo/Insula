//chakra
import { Flex, Image, Button, Text, Heading } from "@chakra-ui/react";

//style
import "./ProjectCard.css";

export const ProjectCard = (props) => {
  const { src, heading } = props;

  const Border = {
    width: { sm : '250px', lg : '230px', '2xl' : '250px'},
    height: {sm : '340px', lg :'340px', '2xl' : '360px'},
    alignItems: "center",
    justifyContent: "center",
    margin: {lg :'10px 20px', xl : '20px 3px', '2xl' : '20px 8px'},
    borderRadius: "20px 0",
    transition: "all ease-in-out 0.6s",
  };
  const ProjectCard = {
    width: {  sm : '250px', lg : '230px', '2xl' : '250px'},
    height: {sm : '340px', lg :'340px', '2xl' : '360px'},
    flexDir: "column",
    bg: "linear-gradient(to bottom, orange, #fff, #fff)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    borderRadius: "20px 0",
    boxShadow: "0 0 15px #ddd",
    position: "relative",
    overflow: "hidden",
    transition: "all ease-in-out 0.6s",
    cursor: "pointer",
  };

  const Overlay = {
    position: "absolute",
    width: "280px",
    height: "380px",
    flexDir: "column",

    padding: "10px 15px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px 0",
    opacity: 0,
    transition: "all ease-in-out 0.5s",
    transform: "translateY(-360px)",
  };
  return (
    <Flex sx={Border} className="border">
      <Flex sx={ProjectCard} className="projectCard" color={"#fff"}>
        <Image src={src} margin={"30px 0px"} w={"200px"} transition={"all ease-in-out 0.5s"} className = 'project-image'></Image>

        <Flex sx={Overlay} className="overlay">
          <Heading fontSize={"1.6rem"}>Title</Heading>
          <Text
            color="#000"
            margin={" 30px 10px"}
            fontSize={"0.9rem"}
            lineHeight={"25px"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, eum
            incidunt velit eveniet repellat quos asperiores totam voluptatum rem
            vel quia animi, nesciunt dolor repudiandae culpa autem voluptate aut
            perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.
          </Text>
          <Button
            bg={"orange.400"}
            color={"#fff"}
            h={"40px"}
            w={"100px"}
            borderRadius={"20px"}
          >
            See more
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
