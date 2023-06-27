//chakra
import { Flex, Heading, Link, Text, Image } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

//utilities
import { BackgroundRight } from "../utilities/BackgroundRight";

//section component
import { ContactForm } from "./ContactForm";
import { FooterMobileBanner } from "./FooterMobileBanner";
import { MobileFooter } from "./MobileFooter";
//assets
import logo from "../../assets/img/logo.svg";
//style
import "./Footer.css";

export const Footer = () => {
  const FooterContainer = {
    w: "100vw",
    h :'100vh',
    flexDir : {base : 'column', xl : 'row'},
    justifyContent : 'space-between',
    alignItems : 'center',
    position : 'relative'
  };
  const footerBox = {
    w: "70%",
    minHeight: "500px",
    alignItems: "center",
    justifyContent : 'space-around',
    borderBottom : '1px dotted',
    borderColor : 'orange.400'
  };
  const logoBox = {
    alignItems: "center",
    flexDir : 'column'
    
  };
  const logoImage = {
    w: "200px",
  };
  const footerHeading = {
    fontSize: "3rem",
    color: "#fff",
    borderBottom : '2px solid orange',
    margin : '20px 0'
  };
  const socialBox = {
    flexDir : 'column'
  };
  const copyrightBox = {};
  return (
    <Flex sx={FooterContainer}>
      <FooterMobileBanner></FooterMobileBanner>
      <ContactForm></ContactForm>
      <MobileFooter></MobileFooter>
      <BackgroundRight color={"#012d5e"} width={"30vw"}>
        <footer
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent: "center",
          }}
        >
          <Flex sx={footerBox}>
            <Flex sx={logoBox}>
              <Image src={logo} sx={logoImage}></Image>
              
            </Flex>
            <Flex sx={socialBox}>
              <Heading sx={footerHeading}>Social</Heading>
              <FontAwesomeIcon icon={faLinkedin} className="social-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faFacebook} className="social-icon"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faInstagram} className="social-icon"></FontAwesomeIcon>
            </Flex>
          </Flex>
            <Flex sx={copyrightBox}>
              <Heading color={'#fff'} fontWeight={'normal'} fontSize={'25px'} margin={'20px 0'}>©Insula, all rights reserved</Heading>
            </Flex>
        </footer>
      </BackgroundRight>
    </Flex>
  );
};
