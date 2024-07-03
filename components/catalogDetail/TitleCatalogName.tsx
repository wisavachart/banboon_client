import { TitleCatalogNameProps } from "@/lib/types";

const TitleCatalogName = ({ title }: TitleCatalogNameProps) => {
  return (
    <h1 className="prompt-bold pt-4 xs:text-[24px] sm:text-[24px] md:text-2xl px-6 sm:px-6 md:px-6 lg:px-6 xl:px-0">
      {`หมวดหมู่สินค้า  >  ${title}`}
    </h1>
  );
};

export default TitleCatalogName;
