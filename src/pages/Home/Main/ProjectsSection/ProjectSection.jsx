//chakra
import { Flex, Heading, chakra, shouldForwardProp } from "@chakra-ui/react";

//motion
import { motion, isValidMotionProp } from "framer-motion";

//utilities
import { BackgroundRight } from "../../../../components/utilities/BackgroundRight";
import { UtilityButton } from "../../../../components/utilities/UtilityButton";
import { MobileBanner } from "../../../../components/utilities/MobileBanner";
import { ProjectsData } from "./ProjectsData";

//section component
import { ProjectsMobileSlider } from "./ProjectsMobileSlider";
import { ProjectsCardsContainer } from "./ProjectsCardsContainer";

export const ProjectSection = () => {
  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const ProjectsContainer = {
    w: "100%",
    h: { sm: "100vh", md: "100vh", lg: "100vh", xl: "100vh", "2xl": "100vh" },
    flexDir: { base: "column", xl: "row" },
    alignItems: "center",
    justifyContent: { base: "flex-start", xl: "space-between" },
    position: "relative",
    bg: "#fff",
  };

  const ProjectsHeadingBox = {
    w: "100%",
    height: "100%",
    zIndex: 1,
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: {
      sm: "100px",
      md: "50px",
      lg: "50px",
      xl: "80px",
      "2xl": "75px",
    },
    color: "#fff",
  };

  return (
    <Flex sx={ProjectsContainer}>
      <MobileBanner heading="Projects" />
      <ProjectsMobileSlider projects={ProjectsData} />
      <ProjectsCardsContainer />
    
      <BackgroundRight
        color={"#012d5e"}
        width={{ sm: "50%", md: "50%", lg: "60%", xl: "20%", "2xl": "18%" }}
      >
        <MotionBox
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
        >
          <Flex sx={ProjectsHeadingBox}>
            <Heading
              borderBottom={"3px solid #ed8936"}
              fontSize={{ xl: "2.8rem", "2xl": "3.2rem" }}
              margin={"50px 0"}
            >
              Projects
            </Heading>
          </Flex>
        </MotionBox>
      </BackgroundRight>
    </Flex>
  );
};
