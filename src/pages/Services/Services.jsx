//chakra
import { Flex, Heading } from "@chakra-ui/react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

//utilities
import { BackgroundLeft } from "../../components/utilities/BackgroundLeft";

//components
import { ServiceSlide } from "./ServiceSlide";

//data
import {ServicesData} from './ServicesData';

export const Services = () => {

  
  

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
  const content = ServicesData.map((service, index) => {
    return (
      <SwiperSlide key={index}>
        <ServiceSlide service={service}></ServiceSlide>
      </SwiperSlide>
    );
  });

  return (
    <Flex sx={headerSection}>
      <BackgroundLeft width={"20vw"} color={"#012d5e"} opacity={1} zIndex={1}>
      <Flex sx={HeadingBox}>
        <Heading
          color={"#fff"}
          fontSize={"3.2rem"}
          borderBottom={"3px solid"}
          borderColor={"orange.500"}
          marginLeft={'2.5vw'}
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
         
        </Swiper>
        
      </Flex>
      
    </Flex>
  );
};
