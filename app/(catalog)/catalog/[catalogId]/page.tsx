"use client";
import TitleCatalogName from "@/components/catalogDetail/TitleCatalogName";
import { fetchCategoryById } from "@/lib/httpsRequest";
import { useQuery } from "@tanstack/react-query";

const CatalogDetailpage = ({ params }: { params: { catalogId: string } }) => {
  const { data: categoryName, isLoading } = useQuery({
    queryKey: ["category", params.catalogId],
    queryFn: ({ signal }) =>
      fetchCategoryById({ signal, id: params.catalogId }),
  });

  return (
    <div className="max-w-[1140px] mx-auto stage1:pt-[13rem] stage2:pt-[15rem] stage3:pt-[17rem] stage4:pt-[20rem] sm:pt-[22rem] md:pt-[20rem] lg:pt-[21rem]">
      {isLoading && <p>Loding....</p>}
      {categoryName && <TitleCatalogName title={categoryName.title} />}
    </div>
  );
};

export default CatalogDetailpage;
