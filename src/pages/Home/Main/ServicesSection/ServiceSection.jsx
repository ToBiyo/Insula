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
import { BackgroundRight } from "../../../../components/utilities/BackgroundRight";
import { UtilityButton } from "../../../../components/utilities/UtilityButton";

// section component
import { ServiceCard } from "./ServiceCard";
import { ServicesBannerMobile } from "./ServicesBannerMobile";

//asssets
import consult from "../../../../assets/img/Servizi/consult.svg";
import management from "../../../../assets/img/Servizi/management.svg";
import project from "../../../../assets/img/Servizi/project.svg";
import comunication from "../../../../assets/img/Servizi/comunication.svg";

export const ServiceSection = () => {
  const services = [
    {
      img: consult,
      title: "Consulenza Programmi di finanziamento",
      subservices: [
        "Servizio informativo",
        "Ricerca opportunità di finanziamento",
      ],
    },
    {
      img: management,
      title: "Management",
      subservices: [
        "Gestione Partenariati e Partecipazione a meeting",
        "Quality Assurance & Risk Management",
        "Gestione e supporto amministrativo erendicontativo",
      ],
    },
    {
      img: project,
      title: "Scrittura e Design del progetto",
      subservices: [
        "Creazione Partenariato",
        "Ideazione Progettuale",
        "Stesura/Scrittura Proposta Progettuale",
        "Revisione e Valutazione",
      ],
    },
    {
      img: comunication,
      title: "Comunicazione e disseminazione",
      subservices: ["Creazione e gestione eventi", "Comunicazione digitale"],
    },
  ];
  const FlexServices = {
    w: "100vw",
    h: {
      base: "100vh",
      sm: "100vh",
      md: "auto",
      lg: "auto",
      xl: "100vh",
      "2xl": "100vh",
    },
    alignItems: { base: "flex-start", sm: "bcenter", md: "center" },
    bg: "#fff",
  };

  const ServicesContainer = {
    width: { xl: "90%", lg: "auto", md: "100%", sm: "100%" },
    height: "auto",
    flexDir: "row",
    flexWrap: "wrap",
    margin: { sm: "80px 0", md: "20px 0", lg: "0 0", xl: "0 0", "2xl": "0 0" },
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: { sm: "50px", md: "30px", lg: "20px", xl: "100px", "2xl": "5px" },
  };
  const ServicesBox = {
    w: "100vw",
    h: { sm: "90vh", md: "90vh", lg: "100vh" },
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const Container = {
    w: "100%",
    h: "100%",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      "2xl": "0px 0 0 100px",
      xl: "0px 0 0 100px",
      lg: "0px 0 0 60px",
      md: "0px 10px 0 60px",
    },
  };

  const HeadText = {
    color: "#fff",
    borderBottom: " 2px solid",
    borderColor: "orange.500",
    fontSize: {
      "2xl": "3rem",
      xl: "2.8rem",
      lg: "2.6rem",
      md: "2.4rem",
      sm: "2.2rem",
    },
    justifySelf: "center",
    alignSelf: "center",
  };
  const TextP = {
    color: "#fff",
    marginTop: "30px",
    fontSize: "16px",
  };
  const MobileButton = {
    display: { sm: "flex", md: "flex", lg: "none", xl: "none", "2xl": "none" },
  };

  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <section className="service-section">
      <Flex w={"100%"} h={"100%"} position={"relative"} flexDir={"column"}>
        <ServicesBannerMobile></ServicesBannerMobile>
        <Flex sx={FlexServices}>
          <Flex sx={ServicesBox}>
            <Flex sx={ServicesContainer}>
              <MotionBox
                initial={{
                  opacity: 0,
                  translateY: "300px",
                }}
                whileInView={{
                  opacity: 1,
                  translateY: "0px",
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                }}
              >
                <ServiceCard
                  service={services[0]}
                  key={services[0].title}
                ></ServiceCard>
              </MotionBox>

              <MotionBox
                initial={{
                  opacity: 0,
                  translateY: "-300px",
                }}
                whileInView={{
                  opacity: 1,
                  translateY: "0px",
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                }}
              >
                <ServiceCard
                  service={services[1]}
                  key={services[1].title}
                ></ServiceCard>
              </MotionBox>

              <MotionBox
                initial={{
                  opacity: 0,
                  translateY: "300px",
                }}
                whileInView={{
                  opacity: 1,
                  translateY: "0px",
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
              >
                <ServiceCard
                  service={services[2]}
                  key={services[2].title}
                ></ServiceCard>
              </MotionBox>
              <MotionBox
                initial={{
                  opacity: 0,
                  translateY: "-300px",
                }}
                whileInView={{
                  opacity: 1,
                  translateY: "0px",
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                }}
              >
                <ServiceCard
                  service={services[3]}
                  key={services[3].title}
                ></ServiceCard>
              </MotionBox>
            </Flex>
            <Flex sx={MobileButton}>
              <MotionBox initial={{
                  opacity: 0,
                  translateY: "50px",
                }}
                whileInView={{
                  opacity: 1,
                  translateY: "0px",
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                }}>
                <UtilityButton value="Get in touch" />
              </MotionBox>
            </Flex>
          </Flex>
          <BackgroundRight
            color={"#012d5e"}
            width={{ sm: "40%", md: "40%", lg: "40%", xl: "30%", "2xl": "30%" }}
          >
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
              <Flex sx={Container}>
                <Heading sx={HeadText}>Our Services</Heading>
                <Text sx={TextP}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate cupiditate sequi ipsa quidem, iste magni neque
                  debitis autem est id saepe quisquam, impedit in, quo fuga ea
                  excepturi facere velit?
                </Text>
                <Flex>
                  <UtilityButton value={"Get in touch"} />
                </Flex>
              </Flex>
            </MotionBox>
          </BackgroundRight>
        </Flex>
      </Flex>
    </section>
  );
};
