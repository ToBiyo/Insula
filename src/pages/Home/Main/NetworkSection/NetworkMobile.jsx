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
import { UtilityButton } from "../../../../components/utilities/UtilityButton";

export const NetworkMobile = () => {
    const MotionBox = chakra(motion.div, {
        shouldForwardProp: (prop) =>
          isValidMotionProp(prop) || shouldForwardProp(prop),
      });

      const NetworkText = {
        width: "100%",
        height: "100vh",
        color: "#fff",
        display : { base : 'flex',sm : 'flex', md : 'flex', lg : 'none', xl : 'none', '2xl': 'none'},
        flexDir: "column",
        justifyContent: "center",
        alignItems : 'center',
        bg : "rgba(1, 45, 94, 0.7)"
        
      };
      const NetworkHeading = {
        m: {base : '100px 0 0 0', sm : '80px 0 0 0'},
        fontSize: {base : '2.4rem', sm : '2.6rem', md : '2.8rem' },
        borderBottom: "3px solid",
        borderColor: " orange.500",
        alignSelf: "center",
        display : 'inline-block'
      }; 
      
      const TextDescription = {
        fontSize : {base : '0.9rem'},
        margin : {base : '50px 30px 70px 30px', sm : '50px 60px 70px 60px', md : '50px 110px 70px 110px'},
        lineHeight : {base : '35px'}
      }
  return (
      <Flex sx={NetworkText}>
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
          <Heading sx={NetworkHeading}>Our Network</Heading>
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
          <Text sx={TextDescription}>
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
          {/* <UtilityButton value="See more" /> */}
          <UtilityButton value="Get in touch" />
        </MotionBox>
      </Flex>
  );
};
