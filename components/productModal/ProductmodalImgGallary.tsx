"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const ProductmodalImgGallary = () => {
  return (
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper">
      <SwiperSlide>
        <div className="mb-16 flex h-[250px] justify-center items-center ">
          <img
            src="/product_img_test.jpg"
            className="object-cover w-full h-[250px]"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mb-16 flex h-[250px] justify-center items-center ">
          <img
            src="/product_img_test.jpg"
            className="object-cover w-full h-[250px]"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mb-16 flex h-[250px] justify-center items-center ">
          <img
            src="/product_img_test.jpg"
            className="object-cover w-full h-[250px]"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductmodalImgGallary;
