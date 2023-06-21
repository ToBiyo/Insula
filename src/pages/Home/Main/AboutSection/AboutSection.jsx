// chakra
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
import { BackgroundLeft } from "../../../../components/utilities/BackgroundLeft";
import { UtilityButton } from "../../../../components/utilities/UtilityButton";

//assets
import about from "../../../../assets/img/Home/about.png";

//components
import { AboutMobile } from "./AboutMobile";

export const AboutSection = () => {
  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const SummaryFlex = {
    h: "100vh",
    w: "100vw",
    overflow: "hidden",
    position: "relative",
    backgroundImage: about,
    backgroundSize: "cover",
  };
  const contentBox = {
    w : '100%', 
    h : '100%',
    flexDir : 'column',
    justifyContent : 'center',
    marginTop : '80px'
  }
  const SummaryHeading = {
    m: "50px 0 0 0",
    fontSize: "3.5rem",
    borderBottom: "3px solid",
    borderColor: " orange.500",
    display : 'inline-block',
    
  };

  const FlexSummaryText = {
    height: "70vh",
    alignSelf: "center",
    w: "100%",
    marginLeft : '100px',
    flexDir: "column",
    align: "center",
    justifyContent: "space-around",
    p: "0 40px",
    color: "#fff",
    zIndex: 1,
  };

  return (
    <section className="about-section">
      <Flex sx={SummaryFlex}>
        <AboutMobile></AboutMobile>
        <BackgroundLeft width={{sm : '100vw', md : '100vw',lg : '80vw', xl : '70vw', '2xl' : '50vw'}} color={"#012d5e"} opacity="0.8">
        <Flex sx={contentBox}>
          <Flex sx={FlexSummaryText}>
            <MotionBox initial={{
              opacity : 0,
              scale : 0
            }}
            whileInView={{
              opacity : 1, 
              scale : 1
            }}
            transition={{
              duration : 0.6, 
              delay : 0.6
            }}
            >
              <Heading sx={SummaryHeading}>About us</Heading>
            </MotionBox>
            <MotionBox
            initial={{
              opacity : 0,
              translate : '200px'
            }}
            whileInView={{
              opacity : 1, 
              translateX : '-200px'
            }}
            transition={{
              duration : 0.6, 
              delay : 0.8
            }}
            >
            <Text lineHeight={"40px"} fontSize={"18px"}>
                Da anni prestiamo la nostra professionalità a servizio di
                Aziende, NGO, Enti ed Istituti della PA, al fine di guidarli
                attraverso il mondo di finanziamenti a livello Nazionale (resto
                al sud, imprese creative, impresa femminile, ed altri) ed
                Europeo (Erasmus+, Horizon Europe, Life+, Europa per i
                Cittadini, ed altri). Crediamo nel valore aggiunto generato
                dalla relazione intersettoriale, favorendo e supportando la
                cooperazione tra Organizzazioni di differenti natura, campi
                d’azione e dimensioni, provenienti da differenti livelli.
              </Text>
            </MotionBox>
            <Flex justifyContent={"flex-start"}>
              <MotionBox
                initial={{
                  opacity : 0,
                  translateY : '50px'
                }}
                whileInView={{
                  opacity : 1, 
                  translateY : '-50px'
                }}
                transition={{
                  duration : 0.6, 
                  delay : 1
                }}
              >
              
              <UtilityButton value="Get in touch" />
              </MotionBox>
            </Flex>
          </Flex>
          
        </Flex>
        <Flex
            w={"30%"}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          ></Flex>
        </BackgroundLeft>
      </Flex>
    </section>
  );
};
