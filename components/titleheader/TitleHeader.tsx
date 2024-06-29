import { TitleHeaderProps } from "@/lib/types";

const TitleHeader = ({ title }: TitleHeaderProps) => {
  return (
    <h1 className="prompt-bold xs:text-[24px] sm:text-[24px] md:text-2xl">
      {title}
    </h1>
  );
};

export default TitleHeader;
