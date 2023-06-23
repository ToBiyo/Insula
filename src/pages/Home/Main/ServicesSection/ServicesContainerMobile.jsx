//react
import { useEffect } from "react";
import { useState } from "react";
//chakra
import { Flex } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//components
import { ServiceCard } from "./ServiceCard";

export const ServicesContainerMobile = (props) => {
  const { services } = props;
  const [slides, setSlides] = useState(0);

  const ServicesSlider = {
    display: { base: "flex", xl: "none" },
    width: "100vw",
    height: "60vh",
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
    setSlides(
      window.innerWidth >= 1000
        ? 3
        : window.innerWidth >= 765
        ? 2
        : window.innerWidth <= 800
        ? 1
        : 0
    );
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
      <Swiper
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={slides}
        style={{ width: "95%" }}
        allowTouchMove={false}
        speed={600}
      >
        <SwiperSlide>
          <Flex sx={sliderBox}>
            <ServiceCard
              service={services[0]}
              key={services[0].title}
            ></ServiceCard>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex sx={sliderBox}>
            <ServiceCard
              service={services[1]}
              key={services[1].title}
            ></ServiceCard>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex sx={sliderBox}>
            <ServiceCard
              service={services[2]}
              key={services[2].title}
            ></ServiceCard>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex sx={sliderBox}>
            <ServiceCard
              service={services[3]}
              key={services[3].title}
            ></ServiceCard>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
