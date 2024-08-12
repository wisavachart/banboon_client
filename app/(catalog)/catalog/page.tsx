"use client";
import SectionAd from "@/components/home/SectionAd";
import SectionAdSecond from "@/components/home/SectionAdSecond";
import SectionBestSeller from "@/components/home/SectionBestSeller";
import SectionNewArrival from "@/components/home/SectionNewArrival";
import LoadingSection from "@/components/loader/LoadingSection";
import ProductCard from "@/components/productcard/ProductCard";
import useSearchDebounceSwitch from "@/hook/useSearchDebounceSwitch";
import { useGetSearchAllProduct } from "@/service/queries";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Catalog = () => {
  const [search, setSearch] = useState("");
  const [isSearchBTNOn, setisSearchBTNOn] = useState<boolean>(false);
  const { debouncedValue, switchOn } = useSearchDebounceSwitch(search, 1500);
  const { data, isPending } = useGetSearchAllProduct(switchOn, debouncedValue);

  function contollerSearchButton() {
    setisSearchBTNOn(!isSearchBTNOn);
    setSearch("");
  }

  return (
    <div className="max-w-[1140px] mx-auto stage1:pt-[13rem] stage2:pt-[15rem] stage3:pt-[17rem] stage4:pt-[20rem] sm:pt-[22rem] md:pt-[20rem] lg:pt-[21rem] ">
      <div
        onClick={contollerSearchButton}
        className="ml-3 md:ml-0 cursor-pointer hover:bg-bbredsec mt-10 rounded-md relative   bg-bbred flex  w-fit items-center gap-2 px-2 py-1">
        <BiSearch color="white" size="22px" />
        <h6 className="text-white md:text-[20px]">ค้นหาสินค้า</h6>
        <div className={isSearchBTNOn ? `rotate-0` : `-rotate-90`}>
          <RiArrowDropDownLine color="white" size="30px" />
        </div>
      </div>
      <AnimatePresence>
        {isSearchBTNOn && (
          <motion.div
            initial={{ opacity: 0, width: "0px" }}
            animate={{
              opacity: 1,
              width: "300px",
              transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
            }}
            exit={{
              opacity: 0,
              width: "0px",
              transition: {
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}>
            <div className="ml-3 rounded-lg flex flex-col mx-auto sm:mx-6 lg:mx-0 xl:mx-0 px-2 py-2 mt-2 bg-bbred">
              {/* <div className="flex gap-6">
                <h6 className="text-white md:text-[20px]">
                  {switchOn ? debouncedValue : ""}
                </h6>
                {switchOn && (
                  <h6 className="text-white md:text-[20px]">
                    ผลลัพธ์ : {data?.length} ชิ้น
                  </h6>
                )}
              </div> */}
              <input
                className="rounded-md text-[16px] mx-0 sm:mx-0 md:mx-0 lg:mx-0 lg:w-full xl:mx-0 p-1  md:w-[400px] border-2"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ค้นหาชื่อสินค้า"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {switchOn ? (
        <>
          {isPending && (
            <LoadingSection bigScreenSkeleton={4} smallScreenSkeleton={2} />
          )}
          <div className="mt-8 mb-96 grid stage1:gap-2 stage2:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 md:gap-8 sm:gap-8  lg:px-0 md:px-6 sm:px-6 stage2:px-6">
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
