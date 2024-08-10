"use client";
import SectionAd from "@/components/home/SectionAd";
import SectionAdSecond from "@/components/home/SectionAdSecond";
import SectionBestSeller from "@/components/home/SectionBestSeller";
import SectionNewArrival from "@/components/home/SectionNewArrival";
import useSearchDebounceSwitch from "@/hook/useSearchDebounceSwitch";
import { useState } from "react";

const Catalog = () => {
  const [search, setSearch] = useState("");
  const { debouncedValue, switchOn } = useSearchDebounceSwitch(search, 1500);
  return (
    <div className="max-w-[1140px] mx-auto stage1:pt-[13rem] stage2:pt-[15rem] stage3:pt-[17rem] stage4:pt-[20rem] sm:pt-[22rem] md:pt-[20rem] lg:pt-[21rem] ">
      <div className="rounded-md flex flex-col w-full mx-auto sm:mx-6 md:mx-6 lg:mx-0 xl:mx-0 p-4 mt-5 md:w-[500px] bg-bbred">
        <div className="flex">
          <h6 className="text-white md:text-[20px]">ค้นหาสินค้า : </h6>
        </div>
        <input
          className="rounded-md text-[16px] mx-0 sm:mx-0 md:mx-0 lg:mx-0 lg:w-full xl:mx-0 p-1 mt-3 md:w-[400px] border-2"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="กรอกชื่อสินค้า"
        />
      </div>
      {switchOn ? (
        // COMPONENT SEARCH HERE
        "แสดงผลการเสิช"
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
