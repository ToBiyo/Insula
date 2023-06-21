//chakra
import { Flex, Heading } from "@chakra-ui/react"
//utilities
import { Nav } from "../../components/utilities/Nav"
import { BackgroundLeft } from "../../components/utilities/BackgroundLeft"


export const About = (props) => {
  const {pageHandler} = props;
  const aboutContent = {
    position : 'relative',
    h : '100vh', 
    w : '100vw', 
    overflow : 'hidden'
  }

  const Banner = {
    w : '100%', 
    h : '200px',
    bg : 'blue.900', margin : '70px 0 0 0'
  }

  return (
    <Flex sx={aboutContent}>
      <Nav color='black' pageHandler={pageHandler}></Nav>
      <Flex sx={Banner}>
      </Flex>
    </Flex>
  )
}
