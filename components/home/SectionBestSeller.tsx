"use client";
import { useBestseller } from "@/service/queries";
import Link from "next/link";
import LoadingSection from "../loader/LoadingSection";
import ProductCard from "../productcard/ProductCard";
import TitleHeader from "../titleheader/TitleHeader";
import { shuffleArray } from "@/lib/random";

const SectionBestSeller = () => {
  const { data, isPending, isError, error } = useBestseller(1, "");
  if (isPending) {
    return <LoadingSection bigScreenSkeleton={4} smallScreenSkeleton={4} />;
  }
  if (isError) {
    return <span>Error</span>;
  }

  const randomBestSeller = data?.bestSellerProduct
    ? shuffleArray([...data?.bestSellerProduct]).slice(0, 8)
    : [];

  return (
    <div className="mb-32">
      <div className="w-full flex justify-between mb-8 items-baseline px-6 sm:px-6 md:px-6 lg:px-6 xl:px-0">
        <TitleHeader title="สินค้าขายดี" />
        <Link href="/catalog/bestseller">
          <h6 className="prompt-regular  xs:text-[16px] md:text-xl ">
            ดูสินค้าขายดีทั้งหมด
          </h6>
        </Link>
      </div>

      {/* SECTION WRAPPER */}
      <div className=" grid stage1:gap-2 stage2:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 md:gap-8 sm:gap-8  lg:px-0 md:px-6 sm:px-6 stage2:px-6">
        {randomBestSeller.map((data) => (
          <ProductCard key={data._id} productData={data} />
        ))}
      </div>
    </div>
  );
};

export default SectionBestSeller;
