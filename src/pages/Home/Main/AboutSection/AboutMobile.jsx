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
import { UtilityButton } from "../../../../components/utilities/UtilityButton";

export const AboutMobile = () => {
  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const AboutContainer = {
    w: "100%",
    h: "100%",
    bg: "rgba(1, 45, 94, 0.7)",
    display : { base : 'flex',sm : 'flex', md : 'flex', lg : 'none', xl : 'none', '2xl': 'none'},
    flexDir : 'column',
    alignItems : 'center', 
    justifyContent : 'center', 
    color : '#fff'
  };

  const SummaryHeading = {
    m: "100px 0 50px 0",
    fontSize: "3.5rem",
    borderBottom: "3px solid",
    borderColor: " orange.500",
    display: "inline-block",
  };

  return (
    <Flex sx={AboutContainer}>
      <MotionBox
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.6,
        }}
      >
        <Heading sx={SummaryHeading}>About us</Heading>
      </MotionBox>
      <MotionBox
        initial={{
          opacity: 0,
          translate: "200px",
        }}
        whileInView={{
          opacity: 1,
          translateX: "-200px",
        }}
        transition={{
          duration: 0.6,
          delay: 0.8,
        }}
      >
        <Text lineHeight={"40px"} fontSize={"18px"} margin={'50px 50px 100px 50px'}>
          Da anni prestiamo la nostra professionalità a servizio di Aziende,
          NGO, Enti ed Istituti della PA, al fine di guidarli attraverso il
          mondo di finanziamenti a livello Nazionale (resto al sud, imprese
          creative, impresa femminile, ed altri) ed Europeo (Erasmus+, Horizon
          Europe, Life+, Europa per i Cittadini, ed altri). Crediamo nel valore
          aggiunto generato dalla relazione intersettoriale, favorendo e
          supportando la cooperazione tra Organizzazioni di differenti natura,
          campi d’azione e dimensioni, provenienti da differenti livelli.
        </Text>
      </MotionBox>
      <Flex justifyContent={"flex-start"}>
        <MotionBox
          initial={{
            opacity: 0,
            translateY: "50px",
          }}
          whileInView={{
            opacity: 1,
            translateY: "-50px",
          }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
        >
          <UtilityButton value="Get in touch" />
        </MotionBox>
      </Flex>
    </Flex>
  );
};
