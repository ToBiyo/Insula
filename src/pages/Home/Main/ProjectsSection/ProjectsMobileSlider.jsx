//react
import { useEffect } from "react";
import { useState } from "react";
//chakra
import { Flex, Button } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//utilities
import { UtilityButton } from "../../../../components/utilities/UtilityButton";
//components
import { ProjectCard } from "./ProjectCard";

export const ProjectsMobileSlider = (props) => {
  const { projects } = props;

  const [slides, setSlides] = useState(0);

  const ServicesSlider = {
    display: { base: "flex", xl: "none" },
    width: { base: "100%", lg: "75%" },
    height: {base : '75vh', sm : '70vh'},
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
   
  };

  const sliderBox = {
    w: { base: "100%", md: "auto" },
    h: "60vh",
    justifyContent: "center",
    alignItems: "center",
  };

  const setSlidesPerview = () => {
    setSlides(window.innerWidth >= 765 ? 2 : window.innerWidth <= 800 ? 1 : 0);
  };
  useEffect(() => {
    //Initially set the amount of slides on page load
    setSlidesPerview();
    // Add the event listner on component mount
    window.addEventListener("resize", setSlidesPerview);

    // Remove the listner when component unmounts
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <Flex sx={ServicesSlider}>
      <Flex w={'100%'} h={'100%'} >
      <Swiper
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={slides}
        style={{ width: "95%" }}
        allowTouchMove={false}
        speed={600}
        initialSlide={slides}
        loop={true}
        
      >
        <SwiperSlide>
          <Flex sx={sliderBox}>
            <ProjectCard project={projects[0]} key={projects[0].heading} />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex sx={sliderBox}>
            <ProjectCard project={projects[1]} key={projects[1].heading} />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex sx={sliderBox}>
            <ProjectCard project={projects[2]} key={projects[2].heading} />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex sx={sliderBox}>
            <ProjectCard project={projects[3]} key={projects[3].heading} />
          </Flex>
        </SwiperSlide>
      </Swiper>
      </Flex>
      <UtilityButton value="See more"/>
    </Flex>
  );
};
