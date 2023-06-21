//chakra
import { Flex, Heading } from "@chakra-ui/react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";

//utilities

import { BackgroundLeft } from "../../components/utilities/BackgroundLeft";

//components
import { ProjectDescription } from "./ProjectDescription";
import { UtilityButton } from "../../components/utilities/UtilityButton";

//assets
import logo1 from "../../assets/img/Progetti/logo1.png";
import logo2 from "../../assets/img/Progetti/logo2.png";
import logo3 from "../../assets/img/Progetti/logo3.png";
import logo4 from "../../assets/img/Progetti/logo4.png";
import fourMinutes from "../../assets/img/Progetti/fourMinutes.jpg";
import goldenTeach from "../../assets/img/Progetti/goldenTeach.jpg";
import cTour from "../../assets/img/Progetti/c-tour.jpg";

export const Projects = (props) => {
  const { pageHandler } = props;

  const Projects = [
    {
      title: "Four-minute barriers",
      subtitle:
        "Foster the inclusion of visually impaired youngsters through sport methodologies and sport activities",
      logo: logo1,
      img: fourMinutes,
      description:
        "The “Four-minute BarrierS” project aims to include visually impaired young people, organising sport activities that involve sighted and visually impaired people.The project is based on the idea that encouraging a VIP, particularly a child, in getting involved with sport is fundamental for:their locomotor development and the related motor skills;mental development such as space recognition, movement construction;psychological wellbeing, increasing the self-confidence and love toward themselves;social skills development connected with a high-quality inclusion in the sighted society high level health quality.",
    },
    {
      title: "Faster",
      subtitle:
        "The FASTER project aims to support excellence in research on adaptation to climate change.",
      logo: logo2,
      img: fourMinutes,
      description:
        "The “Four-minute BarrierS” project aims to include visually impaired young people, organising sport activities that involve sighted and visually impaired people.The project is based on the idea that encouraging a VIP, particularly a child, in getting involved with sport is fundamental for:their locomotor development and the related motor skills;mental development such as space recognition, movement construction;psychological wellbeing, increasing the self-confidence and love toward themselves;social skills development connected with a high-quality inclusion in the sighted society high level health quality.",
    },
    {
      title: "Golden Ratio Teaching",
      subtitle:
        "Interactive approaches and positive attitude for improving teaching and training skills",
      logo: logo3,
      img: goldenTeach,
      description:
        "Golden Ratio Teaching in short, aims at providing teachers with a toolbox and a number of tested approaches and methods for addressing the individual talent and learning style of students, to easily attract attention and combat some insecurities teachers face in their everyday work. Gradually, a shift from teacher-centered to student-centered classroom will be reached which would help teachers perform better, with less stress and to apply a new organization of the process and premises in such a way that the natural curiosity of the students is enhanced.",
    },
    {
      title: "C-Tour",
      subtitle: "Circular Economy for Small Tourism Businesses",
      logo: logo4,
      img: cTour,
      description: `In the C-TOUR project we seeks to minimize the negative impacts of traditional tourism on the environment, economy, and local communities.
        Circular tourism aims to create closed-loop systems, where resources are used and reused in a circular manner, rather than being extracted, consumed, and discarded.`,
    },
  ];

  const headerSection = {
    w: "100%",
    h: "100vh",
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
  const ProjectsBox = {
    flexDir : 'column'
  }
  const SlideBox = {
    w: "70vw",
    h: "85%",
  };

  return (
    <Flex sx={headerSection}>
      <BackgroundLeft width={"30vw"} color={"#012d5e"} opacity={1} zIndex={1}>
        <Flex sx={HeadingBox}>
          <Heading
            color={"#fff"}
            fontSize={"3.4rem"}
            borderBottom={"3px solid"}
            borderColor={"orange.400"}
            marginLeft={"5vw"}
          >
            Projects
          </Heading>
        </Flex>
      </BackgroundLeft>

      <Flex sx={ProjectsBox}>
        <Flex sx={SlideBox}>
          <Swiper
            slidesPerView={1}
            mousewheel={true}
            direction="horizontal"
            naviagation
            speed={1200}
            modules={[Mousewheel]}
            effect="defualt"
          >
            <SwiperSlide key={0}>
              <ProjectDescription project={Projects[0]}></ProjectDescription>
            </SwiperSlide>
            <SwiperSlide key={1}>
              <ProjectDescription project={Projects[1]}></ProjectDescription>
            </SwiperSlide>
            <SwiperSlide key={2}>
              <ProjectDescription project={Projects[2]}></ProjectDescription>
            </SwiperSlide>
            <SwiperSlide key={3}>
              <ProjectDescription project={Projects[3]}></ProjectDescription>
            </SwiperSlide>
          </Swiper>
        </Flex>
        <UtilityButton value='Get in touch'></UtilityButton>
      </Flex>
    </Flex>
  );
};
