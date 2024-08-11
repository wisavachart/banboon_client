"use client";
import SectionAd from "@/components/home/SectionAd";
import SectionAdSecond from "@/components/home/SectionAdSecond";
import SectionBestSeller from "@/components/home/SectionBestSeller";
import SectionNewArrival from "@/components/home/SectionNewArrival";
import LoadingSection from "@/components/loader/LoadingSection";
import ProductCard from "@/components/productcard/ProductCard";
import useSearchDebounceSwitch from "@/hook/useSearchDebounceSwitch";
import { useGetSearchAllProduct } from "@/service/queries";
import { useState } from "react";

const Catalog = () => {
  const [search, setSearch] = useState("");
  const { debouncedValue, switchOn } = useSearchDebounceSwitch(search, 1500);
  const { data, isPending } = useGetSearchAllProduct(switchOn, debouncedValue);

  return (
    <div className="max-w-[1140px] mx-auto stage1:pt-[13rem] stage2:pt-[15rem] stage3:pt-[17rem] stage4:pt-[20rem] sm:pt-[22rem] md:pt-[20rem] lg:pt-[21rem] ">
      <div className="rounded-md flex flex-col w-full mx-auto sm:mx-6  lg:mx-0 xl:mx-0 p-4 mt-5 md:w-[570px]  bg-bbred">
        <div className="flex gap-6">
          <h6 className="text-white md:text-[20px]">
            ค้นหาสินค้า : {switchOn ? debouncedValue : ""}
          </h6>
          {switchOn && (
            <h6 className="text-white md:text-[20px]">
              ผลลัพธ์ : {data?.length} ชิ้น
            </h6>
          )}
        </div>
        <input
          className="rounded-md text-[16px] mx-0 sm:mx-0 md:mx-0 lg:mx-0 lg:w-full xl:mx-0 p-1 mt-3 md:w-[400px] border-2"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ค้นหาชื่อสินค้า"
        />
      </div>
      {switchOn ? (
        <>
          {isPending && (
            <LoadingSection bigScreenSkeleton={4} smallScreenSkeleton={2} />
          )}
          <div className="mt-20 mb-96 grid stage1:gap-2 stage2:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 md:gap-8 sm:gap-8  lg:px-0 md:px-6 sm:px-6 stage2:px-6">
            {data?.map((data) => (
              <ProductCard key={data._id} productData={data} />
            ))}
          </div>
        </>
      ) : (
        <>
          <SectionAd />
          <SectionBestSeller />
          <SectionAdSecond />
          <SectionNewArrival />
        </>
      )}
    </div>
  );
};

export default Catalog;
