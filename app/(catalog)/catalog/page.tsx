"use client";

import ProductCard from "@/components/productcard/ProductCard";
import TitleHeader from "@/components/titleheader/TitleHeader";
import { useHideOnScrollDown } from "@/hook/useHideOnScrollDown";
import Link from "next/link";

const Catalog = () => {
  // เผื่อไว้แก้ Padding
  const isVisible = useHideOnScrollDown();
  return (
    <div className="xs:pt-[15rem] sm:pt-[20rem] md:pt-[18rem] lg:pt-[22rem] max-w-[1140px] mx-auto  ">
      <div className="w-full check flex justify-between items-baseline px-6 sm:px-6 md:px-6 lg:px-0">
        <TitleHeader title="สินค้ามาใหม่" />
        <Link href="/">
          <h6 className="prompt-regular xs:text-[16px] md:text-xl ">
            ดูสินค้าทั้งหมด
          </h6>
        </Link>
      </div>
      <div className="px-6 xs:flex xs:flex-wrap xs:gap-5 xs:justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Catalog;
