//chakra
import { Flex, Heading } from "@chakra-ui/react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

//style
import "./Footer.css";

export const MobileFooter = () => {
  const mobileFooter = {
    display: { base: "flex", xl: "none" },
    w: "100%",
    h: "25vh",
    bg: "#012d5e",
    flexDir: "column",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const copyrightBox = {
    m: "0 auto",
    w: "90vw",
    h: "5vh",
    borderTop: "1px dotted",
    borderColor: "orange.500",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
  };
  const socialBox = {
    w: "100vw",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Flex sx={mobileFooter}>
      <Flex>
        <Heading
          color={"#fff"}
          borderBottom={"1.5px solid"}
          borderColor={"orange.500"}
          margin={"20px 0"}
        >
          Social
        </Heading>
      </Flex>
      <Flex sx={socialBox}>
        <FontAwesomeIcon
          icon={faLinkedin}
          className="mobile-social-icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faFacebook}
          className="mobile-social-icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faInstagram}
          className="mobile-social-icon"
        ></FontAwesomeIcon>
      </Flex>
      <Flex sx={copyrightBox}>
        <Heading
          color={"#fff"}
          fontWeight={"normal"}
          fontSize={"1rem"}
          margin={"0px 0"}
        >
          ©Insula, all rights reserved
        </Heading>
      </Flex>
    </Flex>
  );
};
