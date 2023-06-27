//chakra
import { Flex, Image,Text} from "@chakra-ui/react";

//style
import "./ProjectCard.css";

export const ProjectCard = (props) => {
  const { project } = props;

  const Border = {
    width: { base: "260px", lg: "260px", "2xl": "250px" },
    height: { base: "340px", lg: "340px", "2xl": "360px" },
    alignItems: "center",
    justifyContent: "center",
    margin: { md: "20px 3px", "2xl": "20px 8px" },
    borderRadius: { base: "0 0", sm: "20px 0" },
    transition: "all ease-in-out 0.6s",
  };
  const ProjectCard = {
    width: { base: "250px", lg: "240px", "2xl": "250px" },
    height: { base: "340px", lg: "340px", "2xl": "360px" },
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
        <Image
          src={project.logo}
          margin={"30px 0px"}
          w={"200px"}
          transition={"all ease-in-out 0.5s"}
          className="project-image"
        ></Image>

        <Flex sx={Overlay} className="overlay">
          <Text
            color="#555"
            margin={" 30px 10px"}
            fontSize={"1.2rem"}
            fontWeight={"normal"}
            lineHeight={"35px"}
          >
            {project.description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
