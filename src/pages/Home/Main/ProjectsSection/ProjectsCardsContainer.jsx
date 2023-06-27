//chakra
import { Container, Flex, chakra, shouldForwardProp } from "@chakra-ui/react";

//motion
import { motion, isValidMotionProp } from "framer-motion";

//components
import { ProjectCard } from "./ProjectCard";

//utilities
import { ProjectsData } from "./ProjectsData";

export const ProjectsCardsContainer = () => {
  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const ProjectsBox = {
    w: { "2xl": "75%", xl: "74%", lg: "75%", md: "100%", sm: "100%" },
    height: { base: "auto", xl: "100vh" },
    flexDir: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0px",
    display: { base: "none", xl: "flex" },
  };

  return (
    <Flex sx={ProjectsBox}>
      <MotionBox
        initial={{
          opacity: 0,
          transform: "translateY(100px)",
        }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
        }}
      >
        <ProjectCard project={ProjectsData[0]} />
      </MotionBox>
      <MotionBox
        initial={{
          opacity: 0,
          transform: "translateY(-100px)",
        }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{
          duration: 0.6,
          delay: 0.65,
        }}
      >
        <ProjectCard project={ProjectsData[1]} />
      </MotionBox>
      <MotionBox
        initial={{
          opacity: 0,
          transform: "translateY(100px)",
        }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{
          duration: 0.6,
          delay: 0.8,
        }}
      >
        <ProjectCard project={ProjectsData[2]} />
      </MotionBox>
      <MotionBox
        initial={{
          opacity: 0,
          transform: "translateY(-100px)",
        }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{
          duration: 0.6,
          delay: 0.95,
        }}
      >
        <ProjectCard project={ProjectsData[3]} />
      </MotionBox>
    </Flex>
  );
};
