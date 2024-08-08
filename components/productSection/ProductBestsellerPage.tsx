"use client";

import useSearchDebounce from "@/hook/useSearchDebounce";
import { useBestseller } from "@/service/queries";
import { useState } from "react";
import LoadingSection from "../loader/LoadingSection";
import ProductCard from "../productcard/ProductCard";

const ProductBestSellerPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedValue = useSearchDebounce(search, 1000);

  const { data, isPending, isError, error, isPlaceholderData, isFetching } =
    useBestseller(page, debouncedValue);

  function setNextpage() {
    setPage(page + 1);
  }
  function setPrevpage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  if (isFetching) {
    return (
      <LoadingSection
        bigScreenSkeleton={12}
        smallScreenSkeleton={4}
        enableHeader={false}
      />
    );
  }
  const maxpage = data?.totalPages;
  return (
    <>
      <div>
        {isPending ? (
          <LoadingSection
            bigScreenSkeleton={12}
            smallScreenSkeleton={4}
            enableHeader={false}
          />
        ) : isError ? (
          <p>Error</p>
        ) : (
          <div className="flex flex-col gap-10">
            {/* SEARCH */}
            <input
              className="rounded-md text-[16px] mx-6 sm:mx-6 md:mx-6 lg:mx-6 xl:mx-0 p-3 mt-5 md:w-[400px] border-2"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ค้นหาชื่อสินค้า"
            />
            {/* PRODUCT */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 md:gap-8 sm:gap-8 gap-2 lg:px-0 md:px-6 sm:px-6 px-6">
              {data?.bestSellerProduct
                ?.sort((a, b) => a.title.localeCompare(b.title))
                .map((product) => (
                  <ProductCard key={product._id} productData={product} />
                ))}
            </div>
            {/* PAGEINATION */}
            <div className=" mt-10  flex mx-6 sm:mx-6 md:mx-6 lg:mx-6 xl:mx-0 lg:justify-end justify-center">
              <div className="flex gap-8 items-center">
                <span className="prompt-regular text-[18px]">
                  หน้า : {page} | {maxpage}
                </span>
                <button
                  className={`bg-bbredsec text-white px-3 py-2 rounded-md shadow-md   ${
                    page == 1
                      ? "bg-slate-200"
                      : "bg-bbredsec cursor-pointer hover:bg-red-500"
                  }`}
                  onClick={setPrevpage}
                  disabled={page == 1}>
                  Prev page
                </button>
                <button
                  className={`bg-bbredsec text-white px-3 py-2 rounded-md shadow-md   ${
                    page == maxpage
                      ? "bg-slate-200"
                      : "bg-bbredsec cursor-pointer hover:bg-red-500"
                  }`}
                  onClick={() => {
                    if (!isPlaceholderData) {
                      setNextpage();
                    }
                  }}
                  disabled={isPlaceholderData || page == maxpage}>
                  Next page
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductBestSellerPage;
