import ProductNewPage from "@/components/productSection/ProductNewPage";

const NewavailablePage = () => {
  return (
    <div className="max-w-[1140px] mx-auto stage1:pt-[13rem] stage2:pt-[15rem] stage3:pt-[17rem] stage4:pt-[20rem] sm:pt-[22rem] md:pt-[20rem] lg:pt-[21rem]">
      <h1 className="prompt-bold pt-4 xs:text-[24px] sm:text-[24px] md:text-2xl px-6 sm:px-6 md:px-6 lg:px-6 xl:px-0">
        หมวดหมู่สินค้า : สินค้ามาใหม่
      </h1>
      <div className="pb-96">
        <ProductNewPage />
      </div>
    </div>
  );
};

export default NewavailablePage;
