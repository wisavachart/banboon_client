"use client";

import { useGetCategoryDetail } from "@/service/queries";
import LoadingTitleSkeleton from "../loader/LoadingTitleSkeleton";

interface TitleCatalogNamePROPS {
  params: string;
}

const TitleCatalogName = ({ params }: TitleCatalogNamePROPS) => {
  const categoryDetail = useGetCategoryDetail(params);
  if (categoryDetail.isPending) {
    return <LoadingTitleSkeleton />;
  }
  if (categoryDetail.isError) {
    return <div>error</div>;
  }

  return (
    <h1 className="prompt-bold pt-4 xs:text-[24px] sm:text-[24px] md:text-2xl px-6 sm:px-6 md:px-6 lg:px-6 xl:px-0">
      หมวดหมู่สินค้า : {categoryDetail.data.title}
    </h1>
  );
};

export default TitleCatalogName;
