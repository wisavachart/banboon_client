"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const SectionAd = () => {
  return (
    <div className="mt-6">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <div className="mb-16 flex h-[300px] justify-center items-center ">
            <img
              src="/banner/banner_1.png"
              className="object-cover w-[1140px] h-[300px]"
              alt=""
            />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="mb-16 flex h-[300px] justify-center items-center ">
            <img
              src="/banner/content_2.png"
              className="object-cover w-[1140px] h-[300px]"
              alt=""
            />
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="mb-16 flex h-[300px] justify-center items-center ">
            <img
              src="/banner/content_3.png"
              className="object-cover w-[1140px] h-[300px]"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SectionAd;
