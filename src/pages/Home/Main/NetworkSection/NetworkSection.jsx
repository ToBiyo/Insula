//chakra
import { 
Flex,
Heading,
Text, 
chakra, 
shouldForwardProp
} from "@chakra-ui/react";

//motion
import { motion, isValidMotionProp } from "framer-motion";

//utilities
import { BackgroundLeft } from "../../../../components/utilities/BackgroundLeft";
import { UtilityButton } from "../../../../components/utilities/UtilityButton";


//assets
import networking from '../../../../assets/img/Home/network.png';

//components
import { NetworkMobile } from "./NetworkMobile";

export const NetworkSection = () => {


  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

    const NetworkContainer = {
        bg: "#fff",
        w: "100vw",
        h: "100vh",
        position: "relative",
        overflow: "hidden",
        zIndex: "1",
        backgroundImage: networking,
        backgroundSize: "cover",
      };
      const NetworkContent = {
        w: "100%",
        h: "100%",
        zIndex: 1,
        alignItems : 'center'
      };
    
      const NetworkText = {
        width: "70%",
        height: "60%",
        marginTop : '100px',
        marginLeft : '5vw',
        color: "#fff",
        flexDir: "column",
        justifyContent: "space-around",
      };
      const NetworkHeading = {
        m: "0",
        fontSize: "3.5rem",
        borderBottom: "3px solid",
        borderColor: " orange.500",
        alignSelf: "center",
        display : 'inline-block'
      };

  return (
    <Flex sx={NetworkContainer}>
      <NetworkMobile></NetworkMobile>
      <BackgroundLeft
        width={"50vw"}
        color={"#012d5e"}
        opacity={0.9}
        zIndex={0}
      >
      <Flex sx={NetworkContent}>
        <Flex sx={NetworkText}>
         <MotionBox  initial={{
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
            }}>
         <Heading sx={NetworkHeading}>
            Our Network
          </Heading>
         </MotionBox>
         <MotionBox   initial={{
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
            }}>

         <Text lineHeight={"40px"} fontSize={"18px"}>
            Seguendo la nostra continua voglia di scoprire nuove realtà che ci
            portino a crescere, nel corso degli abbiamo collaborato con
            Organizzazioni provenienti da tutta Europa, sviluppando una ampia
            rete di conoscenze e competenze in svariati ambito tra cui:
            sostenibilità sviluppo, economia circolare, educazione, formazione
            professionale, inclusione, e tanto altro.
          </Text>
         </MotionBox>
          
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
              <UtilityButton value="See more" />
              <UtilityButton value="Get in touch" />
              </MotionBox>
        </Flex>
      </Flex>
      </BackgroundLeft>
    </Flex>
  )
}
