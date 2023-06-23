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


export const ServicesBannerMobile = () => {

    const MotionBox = chakra(motion.div, {
        shouldForwardProp: (prop) =>
          isValidMotionProp(prop) || shouldForwardProp(prop),
      });

      const Container = {
        w : '100%',
        h : {base : '100px', sm : '180px', md : '200px'},
        clipPath: 'polygon(0 0, 85% 0%, 100% 100%, 0% 100%)',
        bg : '#012d5e',
        margin : '70px 0 20px 0',
        display : { base : 'flex',sm : 'flex', md : 'flex', lg : 'flex', xl : 'none', '2xl': 'none'},
        alignItems : { base :'center' ,lg : 'center'},
        justifyContent : 'center'
      }
      const TextContainer = {
        color : '#fff',
        flexDir : 'column',
        justify: 'flex-end',
        alignItems : 'center',
        padding : {base : '0 5vw',sm : '0 10vw', md : '0 20vw'},
        gap : '10px',
        
      }

      const HeadingText= {
        borderBottom : '2px solid', 
        borderColor : 'orange.400',
        fontSize : {base : '2rem',sm : '2.2rem', md : '2.6rem', lg : '2,9', xl :'3.6'},
        marginBottom : '20px'
      }

  return (
    <Flex sx={Container}>
      <MotionBox
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.9,
              }}
            >
              <Flex sx={TextContainer}>
                <Heading sx={HeadingText}>Our Services</Heading>
              </Flex>
            </MotionBox>
    </Flex>
  );
};