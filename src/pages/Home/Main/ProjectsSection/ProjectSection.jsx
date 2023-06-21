//chakra
import {
  Flex,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";

//motion
import { motion, isValidMotionProp } from "framer-motion";

//utilities
import { BackgroundRight } from "../../../../components/utilities/BackgroundRight";
import { UtilityButton } from "../../../../components/utilities/UtilityButton";

//section component
import { ProjectCard } from "./ProjectCard";

//assets
import logo1 from "../../../../assets/img/Progetti/logo1.png";
import logo2 from "../../../../assets/img/Progetti/logo2.png";
import logo3 from "../../../../assets/img/Progetti/logo3.png";
import logo4 from "../../../../assets/img/Progetti/logo4.png";

export const ProjectSection = () => {
  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const ProjectsContainer = {
    w: "100%",
    h: {sm : 'auto', md : 'auto', lg : '100vh', xl : '100vh', '2xl' : '100vh'},
    flexDir: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    bg : '#fff'
  };

  const ProjectsBox = {
    w: {'2xl' : '70%', xl : '70%', lg : 'auto', md : '100%', sm : '100%'},
    minHeight: "auto",
    flexDir: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop : '150px', 
  };

  const ProjectsHeadingBox = {
    w: "100%",
    height : '100%',
    zIndex: 1,
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft : {sm : '100px', md : '50px', lg : '50px', xl : '100px', '2xl' : '100px'},
    color: "#fff",
  };

  return (
    <Flex sx={ProjectsContainer}>
      
      <Flex sx={ProjectsBox}>
        <MotionBox initial={{
          scale : 0,
          opacity : 0,
          translateY : '-200px'
        }}
        whileInView={{
          scale : [1.5, 1],
          opacity : 1, 
          translateY : '0px'
        }}
        transition={{
          delay : 0.6, 
          duration : 0.6
        }}
        
        >
          <ProjectCard
            src={logo1}
            heading={
              "Foster the inclusion of visually impaired youngsters through sport methodologies and sport activities"
            }
          ></ProjectCard>
        </MotionBox>

        <MotionBox initial={{
          scale : 0,
          opacity : 0,
          translateY : '-200px'
        }}
        whileInView={{
          scale : [1.5, 1],
          opacity : 1, 
          translateY : '0px'
        }}
        transition={{
          delay : 0.7, 
          duration : 0.6
        }}>
          <ProjectCard
            src={logo2}
            heading={
              "It aims to reinforce research and knowledge transfer capacity of INRGREF related to innovative land and water management."
            }
          ></ProjectCard>
        </MotionBox>

        <MotionBox initial={{
          scale : 0,
          opacity : 0,
          translateY : '-200px'
        }}
        whileInView={{
          scale : [1.5, 1],
          opacity : 1, 
          translateY : '0px'
        }}
        transition={{
          delay : 0.8, 
          duration : 0.6
        }}>
          <ProjectCard
            src={logo3}
            heading={
              "Golden ratio teaching: Interactive approaches and positive attitude for improving teaching and training skills"
            }
          ></ProjectCard>
        </MotionBox>

        <MotionBox initial={{
          scale : 0,
          opacity : 0,
          translateY : '-200px'
        }}
        whileInView={{
          scale : [1.5, 1],
          opacity : 1, 
          translateY : '0px'
        }}
        transition={{
          delay : 0.9, 
          duration : 0.6
        }}>
          <ProjectCard src={logo4} heading={"Text"}></ProjectCard>
        </MotionBox>
      </Flex>
      <BackgroundRight color={"#012d5e"} width={{sm : '50%', md : '50%', lg : '60%', xl :'30%', '2xl' : '30%'}}>
      <MotionBox initial={{
        scale : 0
      }}
        whileInView={{
          scale : 1
        }}
        transition={{
          duration : 0.6,
          delay : 1
        }}
      >
        
      <Flex sx={ProjectsHeadingBox}>
        <Heading borderBottom={"3px solid #ed8936"} fontSize={"3.2rem"}>
          Projects
        </Heading>
        <Text margin={"40px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          iste enim obcaecati repudiandae. Alias cupiditate dignissimos at in
          dolor temporibus libero culpa excepturi, tempora labore quod molestiae
          nemo nihil nesciunt!
        </Text>
        <Flex>
          <UtilityButton value="Get in touch" />
        </Flex>
      </Flex>
      </MotionBox>
      </BackgroundRight>
      
    </Flex>
  );
};
