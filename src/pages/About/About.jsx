//chakra
import { Flex, Heading, Text } from "@chakra-ui/react";
//utilities
import { BackgroundRight } from "../../components/utilities/BackgroundRight";
import { UtilityButton } from "../../components/utilities/UtilityButton";

export const About = () => {
  const TextContent = `Insula Consulting è una Compagnia di consulenza fondata nel 2019 dal Dott. Matteo Curreli, Euro progettista accreditato ed esperto di opportunità di finanziamento a livello Nazionale ed Europeo. Partendo da questa expertise, la nostra Compagnia offre ad una clientela locale ed Interazionale, servizi riguardo l’individuazione di opportunità di finanziamento, l’ideazione e la scrittura di proposte progettuali, e la gestione di progetti in essere. 

  La nostra missione è quella di supportare organizzazioni provenienti da tutta Europa, nello sviluppo delle loro idee, nel raggiungimento dei loro obiettivi e nella realizzazione dei loro sogni, creando valore dai loro punti di forza, dal loro know-how, e delle loro caratteristiche territoriali e culturali. 
  Ciò è reso possibile grazie alla professionalità e alle competenze del suo fondatore, nonché di collaboratori esperti in differenti aree tematiche e provenienti da differenti realtà lavorative e territoriali su campo Nazionali ed Europeo. Il nostro team individuerà le opportunità di finanziamento che meglio rispondono alle vostre esigenze, orientandovi verso le migliori soluzioni progettuali e gestionali, offrendovi una vasta gamma di servizi. 
  Il nome stesso “Insula Consulting” incarna la volontà di essere un ponte che metta in contatto le realtà internazionali e le realtà locali, come quelle dell’Isola Sarda. Su questo credo, cerchiamo di costruire partenariati sinergici ed innovativi, sempre basati sulla cooperazione e sulla voglia di migliorarsi. Per questo, da anni, portiamo avanti solide e durature relazioni con i nostri clienti, sempre basate sulla reciproca fiducia e sulla creazione di valore.
  Grazie per aver navigato attraverso la storia di Insula Consulting, i nostri servizi, progetti, e le nostre idee. Non vediamo l'ora di collaborare con voi ed aiutarvi a raggiungere i vostri obiettivi!`;
  const aboutContent = {
    position: "relative",
    h: "100vh",
    w: "100vw",
    overflow: "hidden",
    justifyContent: "space-between",
  };

  const Container = {
    w: "80vw",
    h: "100vh",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: { xl: "0 150px" },
  };
  const HeadingBox = {
    w: "30vw",
    h: "100%",
    justifyContent: "center",
    alignItems: "center",
  };
  const pageHeading = {
    color: "#fff",
    fontSize: { xl: "2.8rem", "2xl": "3.2rem" },
    borderBottom: "3px solid",
    borderColor: "orange.500",
    marginLeft: "2.5vw",
  };
  return (
    <Flex sx={aboutContent}>
      <Flex sx={Container}>
        <Text>{TextContent}</Text>
        <UtilityButton value={"Getin touch"} />
      </Flex>
      <BackgroundRight width={"20vw"} color={"#012d5e"} opacity={1} zIndex={1}>
        <Flex sx={HeadingBox}>
          <Heading sx={pageHeading}>About us</Heading>
        </Flex>
      </BackgroundRight>
    </Flex>
  );
};
