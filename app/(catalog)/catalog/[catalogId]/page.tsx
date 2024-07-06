import TitleCatalogName from "@/components/catalogDetail/TitleCatalogName";
import ProductSection from "@/components/productSection/ProductSection";
// http://localhost:3000/catalog/6683b453e82473e08f7893a7
const CatalogDetailpage = ({ params }: { params: { catalogId: string } }) => {
  return (
    <div className="max-w-[1140px] mx-auto stage1:pt-[13rem] stage2:pt-[15rem] stage3:pt-[17rem] stage4:pt-[20rem] sm:pt-[22rem] md:pt-[20rem] lg:pt-[21rem]">
      <TitleCatalogName params={params.catalogId} />
      <div className="pb-96">
        <ProductSection params={params.catalogId} />
      </div>
    </div>
  );
};

export default CatalogDetailpage;
