//chakra
import { Flex, Heading, chakra, shouldForwardProp } from "@chakra-ui/react";

//motion
import { motion, isValidMotionProp } from "framer-motion";
//utilities
import { BackgroundRight } from "../../../../components/utilities/BackgroundRight";
import { UtilityButton } from "../../../../components/utilities/UtilityButton";
import { MobileBanner } from "../../../../components/utilities/MobileBanner";

// section component
import { ServiceCard } from "./ServiceCard";
import { ServicesContainerMobile } from "./ServicesContainerMobile";

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
      base: "auto",
      sm: "auto",
      md: "auto",
      lg: "auto",
      xl: "100vh",
      "2xl": "100vh",
      
    },
    alignItems: { base: "flex-start", md: "flex-start", lg: "flex-start" },
  };

  const ServicesContainer = {
    width: { xl: "80vw", lg: "100%", md: "100%", sm: "100%" },
    height: "80vh",
    flexDir: "row",
    flexWrap: "wrap",
    zIndex: 1,
    justifyContent: "center",
    alignItems: { md: "flex-start", xl: "center" },
    display: { base: "none", sm: "none", md: "none", lg: "none", xl: "flex" },
    
  };
  const ServicesBox = {
    w: "100vw",
    h: { sm: "auto", md: "auto", lg: "auto", xl : '100vh' },
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
  };

  const HeadText = {
    color: "#fff",
    fontSize: {
      "2xl": "3rem",
      xl: "2.6rem",
      lg: "2.6rem",
      md: "2.4rem",
      sm: "2.2rem",
    },
    borderBottom: "2px solid",
    borderColor: "orange.400",
    textAlign: "center",
    marginLeft: { lg: "65px", xl: "65px" },
    marginRight: "20px",
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
      <Flex w={"100%"} h={"100vh"} position={"relative"} flexDir={"column"} /* overflow={'hidden'} */>
        <MobileBanner heading="Services"/>
        <Flex sx={FlexServices}>
          <Flex sx={ServicesBox}>
            <ServicesContainerMobile services={services} />
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
              <MotionBox
                initial={{
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
                }}
              >
                {<UtilityButton value="Get in touch" />}
              </MotionBox>
            </Flex>
            {<Flex display={{base : 'none', lg : 'flex'}}>
              {<UtilityButton value="Get in touch" />}
            </Flex>}
          </Flex>
          <BackgroundRight
            color={"#012d5e"}
            width={{ sm: "40%", md: "40%", lg: "40%", xl: "20%", "2xl": "30%" }}
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
              </Flex>
            </MotionBox>
          </BackgroundRight>
        </Flex>
      </Flex>
    </section>
  );
};
