//chakra
import { Flex, Heading } from "@chakra-ui/react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

//utilities
import { BackgroundLeft } from "../../components/utilities/BackgroundLeft";

//components
import { ServiceSlide } from "./ServiceSlide";

//assets
import consult from "../../assets/img/Servizi/consult.svg";
import management from "../../assets/img/Servizi/management.svg";
import project from "../../assets/img/Servizi/project.svg";
import comunication from "../../assets/img/Servizi/comunication.svg";

export const Services = () => {

  const Swipe = useSwiper();
  const Services = [
    {
      title: "Consulenza programmi di finanziamento",
      image: consult,
      subservices: [
        {
          subTitle: "Servizio informativo",
          description:
            "Servizio informativo su programmi di finanziamento Europei e Nazionali quali: Horizon 2020; Erasmus +; Europa per i Cittadini; Resto al Sud; Impresa Creativa, e altri  ancora.",
        },
        {
          subTitle: "Ricerca opportunità di finanziamento ",
          description:
            "Ricerca ed identificazione delle opportunità di finanziamento più adatte alle caratteristiche ed alle esigenze del cliente.",
        },
      ],
    },
    {
      title: "Management",
      image: management,
      subservices: [
        {
          subTitle: "Gestione Partenariati e Partecipazione a meeting",
          description: `Gestione partenariati durante 
            tutte le fasi del progetto; 
            partecipazione e sostituzione a 
            meeting internazionali ed eventi
            in tutta l’area EU27.`,
        },
        {
          subTitle: "Quality Assurance & Risk Management ",
          description: `Quality Assurance e Risk 
            Management per progetti 
            all’interno della cornice di 
            finanziamento Europeo e 
            Nazionale`,
        },
        {
          subTitle: "Gestione e supporto amministrativo e rendicontativo",
          description: `Creazione, collezione e 
            valutazione dei documenti 
            amministrativi e rendicontativi 
            relativi alle attività progettuali.
            `,
        },
      ],
    },
    {
      title: "Scrittura e design del progetto",
      image: project,
      subservices: [
        {
          subTitle: "Creazione Partenariato",
          description: `Ricerca 
            Partner e 
            costituzione 
            partenariato 
            su area EU28`,
        },
        {
          subTitle: "Ideazione Progettuale",
          description: `Design e sviluppo
            idee progettuali che 
            incontrino le 
            necessità del cliente 
            con i termini dei 
            programmi di 
            finanziamento.`,
        },
        {
          subTitle: "Stesura/Scrittura Proposta Progettuale",
          description: `Scrittura proposta 
            progettuale basata 
            su idea progettuale 
            già esistente.
            `,
        },
        {
          subTitle: "Revisione e Valutazione",
          description: `Revisione e 
            valutazione 
            proposte 
            progettuali.
            `,
        },
      ],
    },
    {
      title: "Comunicazione e disseminazione",
      image: comunication,
      subservices: [
        {
          subTitle: "Creazione e gestione eventi ",
          description: `Creazione e gestione eventi inerenti ad attività 
            progettuali quali: conferenze, workshops, tavole 
            rotonde, seminari, ecc.`,
        },
        {
          subTitle: "Comunicazione digitale",
          description: `Creazione e gestione piattaforme web;
            Disseminazione digitale contenuti progettuali via 
            Social Media principali (Facebook; Instagram; 
            LinkedIn; Twitter); campagne di newsletter; `,
        },
      ],
    },
  ];

  const headerSection = {
    w: "100%",
    h: "100vh",
    position: "relative",
    justifyContent: "space-between",
    overflow: "hidden",
    color: "#000",
  };

  const HeadingBox = {
    zIndex: 1,
    w: "20vw",
    h: "100vh",
    alignItems: "center",
  };
  const ServiceBox = {
    w: "75vw",
    h: "100%",
  };
  const content = Services.map((service, index) => {
    return (
      <SwiperSlide key={index}>
        <ServiceSlide service={service}></ServiceSlide>
      </SwiperSlide>
    );
  });

  return (
    <Flex sx={headerSection}>
      <BackgroundLeft width={"30vw"} color={"#012d5e"} opacity={1} zIndex={1}>
      <Flex sx={HeadingBox}>
        <Heading
          color={"#fff"}
          fontSize={"3.4rem"}
          borderBottom={"3px solid"}
          borderColor={"orange.500"}
          marginLeft={'5vw'}
        >
          Servizi
        </Heading>
      </Flex>
      </BackgroundLeft>
      
      <Flex sx={ServiceBox}>
        <Swiper
          slidesPerView={2}
          mousewheel={true}
          direction="horizontal"
          naviagation
          speed={1200}
          modules={[Mousewheel, Pagination]}
          effect="defualt"
          pagination={{
            dynamicBullets : true
          }}
        >
          {content}
          {/* <Button position={'absolute'} top={0} right={0} onClick={() =>{Swipe.slideNext()}}>Next</Button> */}
        </Swiper>
        
      </Flex>
      
    </Flex>
  );
};
