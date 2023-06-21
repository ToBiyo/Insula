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
        h : {base : '120px', sm : '200px'}, 
        bg : '#012d5e',
        margin : '0px 0 20px 0',
        display : { base : 'flex',sm : 'flex', md : 'flex', lg : 'flex', xl : 'none', '2xl': 'none'},
        alignItems : 'flex-end',
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

      const descriptionText = {
        display : {base : 'none', sm : 'none', md : 'flex' }
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
                <Text sx={descriptionText}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate cupiditate sequi ipsa quidem, iste magni neque
                  debitis autem est id saepe quisquam, impedit in, quo fuga ea
                  excepturi facere velit?
                </Text>
              </Flex>
            </MotionBox>
    </Flex>
  );
};
