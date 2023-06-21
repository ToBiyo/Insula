//chakra
import {
  Flex,
  Image,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";

//motion
import { motion, isValidMotionProp } from "framer-motion";

//components
import { UtilityButton } from "../../components/utilities/UtilityButton";

export const ProjectDescription = (props) => {
  const { title, logo, subtitle, img, description } = props.project;

  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const projectContainer = {
    w: "100%",
    h: "100%",
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const contentBox = {
    margin: "20px 0",
    w: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "30px",
  };
  const descriptionBox = {
    w: "50%",
    borderLeft: "1px dotted orange",
    padding: "0 20px",
  };

  return (
    <Flex sx={projectContainer}>
      {/* <Heading color={'orange.400'}>{title}</Heading> */}
      <MotionBox
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
      >
        <Image src={logo} width={"300px"} margin={"30px 0"}></Image>
      </MotionBox>
      <MotionBox
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.6,
        }}
      >
        <Heading fontSize={"22px"} margin={"20px 0"} color={"blackAlpha.600"}>
          {subtitle}
        </Heading>
      </MotionBox>
      <Flex sx={contentBox}>
        <Flex sx={descriptionBox}>
          <MotionBox 
          initial={{
            opacity : 0, 
            translateX : '-200px'
          }}
          whileInView={{
            opacity : 1, 
            translateX : '0px'
          }}
          transition={{
            duration : 0.8, 
            delay : 0.8
          }}
          
          >
          <Text lineHeight={"30px"}>{description}</Text>
          </MotionBox>
        </Flex>
        <MotionBox
        initial={{
            opacity : 0, 
            translateX : '200px'
          }}
          whileInView={{
            opacity : 1, 
            translateX : '0px'
          }}
          transition={{
            duration : 0.8, 
            delay : 0.8
          }}
        >
        <Image src={img} width={"400px"}></Image>
        </MotionBox>
      </Flex>
      
    </Flex>
  );
};
