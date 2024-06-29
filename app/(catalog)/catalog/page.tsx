"use client";

// import ProductCard from "@/components/productcard/ProductCard";
import { useHideOnScrollDown } from "@/hook/useHideOnScrollDown";

const Catalog = () => {
  // เผื่อไว้แก้ Padding
  const isVisible = useHideOnScrollDown();
  return (
    <div className="pt-[16rem] sm:pt-[20rem] md:pt-[18rem] lg:pt-[22rem] max-w-[1140px] h-full mx-auto ">
      {/* <div>สินค้ามาใหม่</div>
      <ProductCard />
      <ProductCard />
      <div>สินค้ามาใหม่</div> */}
    </div>
  );
};

export default Catalog;
