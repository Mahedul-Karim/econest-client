import React, { useRef } from "react";
import Container from "../common/Container";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { EVENT_SLIDES } from "@/lib/data";

const Slides = ({ imageUrl, title, subtitle, buttonText }) => {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-xl min-h-[400px] xs:min-h-[500px] relative z-[1] flex flex-col justify-end p-6 xs:p-8 gap-2"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/30 -z-1 rounded-xl"></div>
      <h1 className="text-2xl xs:text-3xl text-white font-bold leading-[1.4] max-w-[560px]">
        {title}
      </h1>
      <p className="text-white/90 max-w-[780px] text-sm xs:text-base">
        {subtitle}
      </p>
      <div>
        <Button className="h-9 xs:h-10 font-medium rounded-full px-8">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const Banner = () => {
  const swiperRef = useRef(null);

  return (
    <Container className="mt-6 relative group">
      <Swiper
        loop
        className="h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {EVENT_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slides
              imageUrl={slide.image}
              title={slide.title}
              subtitle={slide.description}
              buttonText={slide.buttonText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-[50%] -translate-y-[50%] flex items-center justify-between z-[2] w-full px-6 sm:px-8 opacity-60 transition-opacity group-hover:opacity-100 duration-300">
        <Button
          className={
            "rounded-full bg-white/10 text-white backdrop-blur-[10px] border-transparent h-auto aspect-square hover:bg-white hover:text-dark dark:hover:text-[#1e1e1e]"
          }
          onClick={() => swiperRef.current.slidePrev()}
        >
          <ChevronLeft className="size-4 xs:size-6" />
        </Button>
        <Button
          className={
            "rounded-full bg-white/10 text-white backdrop-blur-[10px] border-transparent h-auto aspect-square hover:bg-white hover:text-dark dark:hover:text-[#1e1e1e]"
          }
          onClick={() => swiperRef.current.slideNext()}
        >
          <ChevronRight className="size-4 xs:size-6" />
        </Button>
      </div>
    </Container>
  );
};

export default Banner;
