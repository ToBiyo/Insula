//chakra
import {
  Flex,
  Heading,
  Image,
  Text, 
  chakra, 
  shouldForwardProp
} from "@chakra-ui/react";

//motion
import { motion, isValidMotionProp } from "framer-motion";

const ServiceContent = {
  width : '100%',
  height : '100%',
  flexDir : 'column',
  alignItems : 'center',
  justifyContent : 'center'
}
const ServiceHeading = {
flexDir : 'column',
w : '80%',
justifyContent : 'center',
alignItems : 'center'
}


const SubserviceBox = {
  margin : '20px 0',
  w : '80%',
  flexDir : 'column', 
  /* alignItems : 'center' */
}

const SubServiceContent = {
  flexDir : 'column',
  margin : '10px 0',
  padding : '10px',
  borderBottom : '1px dotted',
  borderColor : 'orange.400'
}
export const ServiceSlide = (props) => {
  const {image, title, subservices} = props.service;

  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  let delay = 0.8;
  
  return (
    <Flex sx={ServiceContent}>
      <Flex sx={ServiceHeading}>
        <MotionBox 
        initial={{
          opacity : 0,
        }}
        whileInView={{
          opacity: 1,

        }}
        transition={{
          duration : 0.6, 
          delay : 0.6
        }}>
        <Flex>
          <Heading margin={'20px 0'} color={'#012d5e'} fontSize={'30px'}>{title}</Heading>
        </Flex>
        </MotionBox>
        <MotionBox initial={{
          opacity : 0,
        }}
        whileInView={{
          opacity: 1,

        }}
        transition={{
          duration : 0.6, 
          delay : 0.8
        }}>
        <Flex>
          <Image src={image} w={'250px'}></Image>
        </Flex>
        </MotionBox>
      </Flex>
      <Flex sx={SubserviceBox}>
        {subservices.map( (subservice)=>{
          delay += 0.2;

          return (<MotionBox key={subservice.subTitle} initial={{
            opacity : 0,
          }}
          whileInView={{
            opacity: 1,
  
          }}
          transition={{
            duration : 0.6, 
            delay : delay
          }}>
            <Flex  sx={SubServiceContent}>
          <Heading margin={'10px 0'} fontSize={'20px'} color={'blue.900'}>{subservice.subTitle}</Heading>
          <Text fontSize={'16px'} >{subservice.description}</Text>
        </Flex>
          </MotionBox>) 

        })}
      </Flex>
    </Flex>
  )
}
