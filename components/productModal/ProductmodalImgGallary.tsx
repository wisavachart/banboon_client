"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ProductModalImageProps } from "./ProductModalImage";

interface GallaryPROPS {
  gallary?: string[];
}
const ProductmodalImgGallary = ({ gallary }: GallaryPROPS) => {
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
      {gallary?.map((item) => (
        <SwiperSlide key={item}>
          <img
            src={item ? item : "/product_img_test.jpg"}
            className="object-cover w-full h-auto stage3:h-[480px] lg:h-[500px]"
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductmodalImgGallary;
