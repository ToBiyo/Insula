//chakra
import { Flex, Box } from "@chakra-ui/react";

//utilities
import { BackgroundLeft } from "../../../../components/utilities/BackgroundLeft";

//assets
import home from "../../../../assets/img/Home/home.png";

//section component
import { HeadSectionContent } from "./HeadSectionContent";


export const HeadSection = () => {
 

  const HeadContentBox = {
    w: "100%",
    h: "100vh",
    flexDir: "column",
    backgroundImage: home,
    backgroundSize: "cover",
    position: "relative",
    overflow: "hidden",
  };
  const Background = {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
    bg : "linear-gradient(to right, #012d5e, rgba(0,0,0,0.2))",
    overflow : 'hidden'
  };

  

  return (
    <Flex className="header-box" sx={HeadContentBox} >
      
        <HeadSectionContent ></HeadSectionContent>
      
      
      <Box sx={Background}></Box>
    </Flex>
  );
};



