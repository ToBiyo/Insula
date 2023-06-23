//chakra
import { Flex, Image, Heading, Text} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const ServiceCard = (props) => {


  const { img, title, subservices, delay } = props.service;




  const Card = {
    position: "relative",
    w: {base : '270px', md : "270px", xl : '235px', '2xl' : '260px'},
    h: {base : '360px', sm : '370px', md : '400px', lg : '360px' },
    flexDir: 'column',
    color: "#000",
    alignItems : 'center',
    justifyContent : 'center',
    transition: "all ease-in-out 0.5s",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: {base : "0", sm : "40px 0"},
    boxShadow: {base : "", sm : "0 0 15px #555"},
    bg: "linear-gradient(to bottom, #012d5e, rgb(0,0,0,0), #fff)",
    ":hover": {
      transform: "scale(1.02)",
    },
    margin : {base : '10px',lg : '0px 10px', xl : '10px'}
  };
  const serviceImage = {
    h : { lg : '140px'}
  }
  const HeadingBox = {
    w: "100%",
    h: "61px",
    justifyContent: "center",
  };
  const ServiceHeading = {
    width: "90%",
    fontWeight: "500",
    fontSize: {base : '1.1rem', sm : '1.1rem'},
    color: "orange.400",
    textAlign: "center",
  };
  const subservicesBox = {
    width: "90%",
    height: "100%",
    margin: "5px auto",
    flexDir: "column",
    textAlign: "center",
    padding: "5px 0",
    display : {base : 'flex', lg : 'flex'}
  };

  const subservicesContent = subservices.map((subservice) => (
    <Text className="listItem" key={subservice} margin={"5px 0"} fontSize={{base : '0.8rem', md : '0.9rem'}}>
      <CheckIcon color={"orange.400"} width={"15px"} margin={" 0 5px"} />
      {subservice}
    </Text>
  ));

  return (
      <Flex sx={Card} className="Card" >
      <Image src={img} sx={serviceImage}></Image>
      <Flex sx={HeadingBox}>
        <Heading sx={ServiceHeading}>{title}</Heading>
      </Flex>
      <Flex sx={subservicesBox}>{subservicesContent}</Flex>
    </Flex>
    
  );
};
