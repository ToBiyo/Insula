//react
import { useState } from "react";
//chakra
import { Flex } from "@chakra-ui/react";
//swiper
import {
Swiper, 
SwiperSlide,
} from "swiper/react";
import { Mousewheel } from "swiper";
import 'swiper/css';

//page Sections
import { HeadSection } from "./Main/Head/HeadSection";
import { ServiceSection } from "./Main/ServicesSection/ServiceSection";
import { AboutSection } from "./Main/AboutSection/AboutSection";
import { ProjectSection } from "./Main/ProjectsSection/ProjectSection";
import { NetworkSection } from "./Main/NetworkSection/NetworkSection";
import { Footer } from "../../components/Footer/Footer";




export const Home = () => {
  
  

  
  return (
    
     <Flex /* h={'100vh'} overflow={'hidden'} */>
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
          <HeadSection/>
        </SwiperSlide>
        <SwiperSlide key={1}>
          <ServiceSection />
        </SwiperSlide>
        <SwiperSlide key={2}>
           <AboutSection />
        </SwiperSlide>
        <SwiperSlide key={3}>
          <ProjectSection />
        </SwiperSlide>
        <SwiperSlide key={4}>
         <NetworkSection />
        </SwiperSlide>
      <SwiperSlide>
       <Footer />
      </SwiperSlide>
    </Swiper>
     </Flex>
  )
}
