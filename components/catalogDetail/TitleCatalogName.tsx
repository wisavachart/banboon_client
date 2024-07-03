import { TitleCatalogNameProps } from "@/lib/types";

const TitleCatalogName = ({ title }: TitleCatalogNameProps) => {
  return (
    <h1 className="prompt-bold pt-6 xs:text-[24px] sm:text-[24px] md:text-2xl">
      {`หมวดหมู่สินค้า  >  ${title}`}
    </h1>
  );
};

export default TitleCatalogName;
