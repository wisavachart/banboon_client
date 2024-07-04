import TitleCatalogName from "@/components/catalogDetail/TitleCatalogName";
import ProductSection from "@/components/productSection/ProductSection";

const CatalogDetailpage = ({ params }: { params: { catalogId: string } }) => {
  return (
    <div className="max-w-[1140px] mx-auto stage1:pt-[13rem] stage2:pt-[15rem] stage3:pt-[17rem] stage4:pt-[20rem] sm:pt-[22rem] md:pt-[20rem] lg:pt-[21rem]">
      <TitleCatalogName params={params.catalogId} />
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 md:gap-8 sm:gap-8 gap-2 lg:px-6 md:px-6 sm:px-6 px-6"> */}
      <div className="flex flex-col">
        <ProductSection params={params.catalogId} />
      </div>
    </div>
  );
};

export default CatalogDetailpage;
