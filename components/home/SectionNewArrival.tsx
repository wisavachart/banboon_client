"use client";

import { useNewProduct } from "@/service/queries";
import Link from "next/link";
import LoadingSection from "../loader/LoadingSection";
import ProductCard from "../productcard/ProductCard";
import TitleHeader from "../titleheader/TitleHeader";

const SectionNewArrival = () => {
  const newProductId = useNewProduct();

  if (newProductId.isPending) {
    return <LoadingSection />;
  }
  if (newProductId.isError) {
    return <span>Error</span>;
  }
  return (
    <div className="mb-16">
      <div className="w-full  flex justify-between mb-8 items-baseline px-6 sm:px-6 md:px-6 lg:px-6 xl:px-0">
        <TitleHeader title="สินค้ามาใหม่" />
        <Link href="/catalog/newavailable">
          <h6 className="prompt-regular  xs:text-[16px] md:text-xl ">
            ดูสินค้ามาใหม่ทั้งหมด
          </h6>
        </Link>
      </div>
      {/* SECTION WRAPPER */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 md:gap-8 sm:gap-8 gap-2 lg:px-0 md:px-6 sm:px-6  px-6">
        {newProductId.data?.slice(0, 8).map((data) => (
          <ProductCard key={data._id} productData={data} />
        ))}
      </div>
    </div>
  );
};

export default SectionNewArrival;
