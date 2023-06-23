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
  console.log(services);

  const ServicesSlider = {
    display: { base: "flex", xl: "none" },
    width: "100vw",
    height: "60vh",
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
    
  };

  const sliderBox = {
    w: '100%',
    h : '60vh',
    justifyContent : 'center',
    alignItems : 'center'
  }

  return (
    <Flex sx={ServicesSlider}>
      <Swiper
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
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
              service={services[0]}
              key={services[0].title}
            ></ServiceCard>
          </Flex>
        </SwiperSlide>
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
              service={services[0]}
              key={services[0].title}
            ></ServiceCard>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
