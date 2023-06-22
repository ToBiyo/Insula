//chakra
import {
  Flex,
  Box,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
//motion
import { motion, isValidMotionProp } from "framer-motion";

//utilities
import { UtilityButton } from "../../../../components/utilities/UtilityButton";

export const HeadSectionContent = () => {
  const HeaderContentFlex = {
    w: "80%",
    height: "100vh",
    alignSelf: "center",
    m: "0",
    zIndex: 1,
  };

  const HeaderBox = {
    h: "100%",
    width: {sm : '100%', md : '60%', lg : '50%', xl: '40%', '2xl' : '40%'},
    display: "flex",
    flexDir: "column",
    color: "#fff",
    justifyContent: "center",
  };

  const HeaderText = {
    fontSize: {base : '0.8rem', sm : '0.9rem', md : '1rem', lg : '1.1rem', xl : '1.2rem'},
    lineHeight: "2.5rem",
    m: "20px 0px",
  };

  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <Flex sx={HeaderContentFlex}>
      <Box sx={HeaderBox}>
        <MotionBox
          initial={{
            opacity: 0,
            translateX: "-200px",
          }}
          whileInView={{
            opacity: 1,
            translateX: "0px",
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        >
          <Heading fontSize={{base : '2rem',sm : '2.2rem', md : '2.6rem', lg : '3.3rem', xl :'3.6', '2xl' : '3.6rem'}} m={"80px 0 0 0"} color={"orange.400"}>
            Insula
          </Heading>
        </MotionBox>
        <MotionBox
          initial = {{
            opacity : 0, 
            translateX : '200px'
          }}
          whileInView={{ 
            opacity: 1,
            translateX : '0px'
          }}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
        >
          <Text sx={HeaderText}>
            Insula Consulting svolge attività di consulenza a supporto dello
            sviluppo e della crescita di Organizzazioni private e pubbliche,
            attraverso la ricerca e gestione di opportunità di finanziamento a
            livello Nazionale ed Europeo.
          </Text>
        </MotionBox>
        <MotionBox
          initial={{
            opacity : 0,
            translateY : '150px'
          }}
          whileInView={{ 
            opacity: 1,
            translateY : '0px'
          }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
        >
          <UtilityButton
            value="Get in touch"
            align={"flex-start"}
          ></UtilityButton>
        </MotionBox>
      </Box>
      <Box w={"auto"}></Box>
    </Flex>
  );
};
